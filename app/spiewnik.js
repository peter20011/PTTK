import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as MediaLibrary from 'expo-media-library';
import { StorageAccessFramework } from 'expo-file-system';
import Toast from 'react-native-root-toast';

const Spiewnik = () => {
    const handleDownload = async () => {
        // Show toast indicating download has started
        let toast = Toast.show('Plik jest w trakcie pobierania...', {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
        });

        try {
            // Request Media Library permissions
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Brak uprawnień', 'Nie uzyskano dostępu do biblioteki multimediów.');
                Toast.hide(toast);
                return;
            }

            // Load the asset
            const asset = Asset.fromModule(require('./../assets/documents/spiewnik.pdf'));
            await asset.downloadAsync();

            const localUri = asset.localUri || asset.uri;
            if (!localUri) {
                Alert.alert('Błąd', 'Nie udało się pobrać pliku.');
                Toast.hide(toast);
                return;
            }

            // Prepare download path
            const downloadUri = `${FileSystem.documentDirectory}spiewnik.pdf`;
            await FileSystem.copyAsync({
                from: localUri,
                to: downloadUri,
            });

            // Verify that the file exists at the specified location
            const fileInfo = await FileSystem.getInfoAsync(downloadUri);
            if (!fileInfo.exists) {
                console.error('File does not exist at the download URI:', downloadUri);
                Alert.alert('Błąd', 'Plik nie istnieje w lokalizacji docelowej.');
                Toast.hide(toast);
                return;
            }

            // Save the file to the Downloads directory
            if (Platform.OS === 'android') {
                // For Android, use the external storage Downloads directory
                const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
                if (!permissions.granted) {
                    Alert.alert('Brak uprawnień', 'Nie uzyskano dostępu do katalogu.');
                    Toast.hide(toast);
                    return;
                }

                const newUri = await StorageAccessFramework.createFileAsync(permissions.directoryUri, 'spiewnik.pdf', 'application/pdf');
                await FileSystem.writeAsStringAsync(newUri, await FileSystem.readAsStringAsync(downloadUri, { encoding: FileSystem.EncodingType.Base64 }), { encoding: FileSystem.EncodingType.Base64 });
                Alert.alert('Pobieranie zakończone', 'Plik został zapisany w katalogu Downloads.');
            } else {
                // For iOS, we can use the MediaLibrary to save it in the Downloads folder
                const assetObj = await MediaLibrary.createAssetAsync(downloadUri);
                await MediaLibrary.createAlbumAsync('Downloads', assetObj, false);
                Alert.alert('Pobieranie zakończone', 'Plik został zapisany w katalogu Downloads.');
            }

        } catch (error) {
            console.error('Error creating asset:', error);
            Alert.alert('Błąd', 'Wystąpił problem podczas pobierania pliku. Spróbuj ponownie później.');
        } finally {
            Toast.hide(toast);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleDownload} style={styles.buttonContainer}>
                <Image
                    source={require('./../assets/button_pobierz.png')}
                    style={styles.buttonImage}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    buttonImage: {
        resizeMode: 'contain',
    },
});

export default Spiewnik;
