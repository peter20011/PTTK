import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as MediaLibrary from 'expo-media-library';

const Spiewnik = () => {
    const handleDownload = async () => {
        try {
            const asset = Asset.fromModule(require('./../assets/documents/spiewnik.pdf'));
            await asset.downloadAsync();
            const localUri = asset.localUri;

            const permissions = await MediaLibrary.requestPermissionsAsync();
            if (!permissions.granted) {
                Alert.alert('Brak uprawnień', 'Nie uzyskano dostępu do pamięci urządzenia.');
                return;
            }

            const downloadUri = `${FileSystem.documentDirectory}Spiewnik.pdf`;
            await FileSystem.copyAsync({
                from: localUri,
                to: downloadUri,
            });

            const assetObj = await MediaLibrary.createAssetAsync(downloadUri);
            const album = await MediaLibrary.getAlbumAsync('Download');
            if (album == null) {
                await MediaLibrary.createAlbumAsync('Download', assetObj, false);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([assetObj], album, false);
            }

            Alert.alert('Pobieranie zakończone', 'Plik został zapisany.');
        } catch (error) {
            console.error(error);
            Alert.alert('Błąd', 'Wystąpił problem podczas pobierania pliku. Spróbuj ponownie później.');
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
