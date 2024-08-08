import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Linking, ScrollView, Dimensions, Platform } from "react-native";
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as MediaLibrary from 'expo-media-library';
import { StorageAccessFramework } from 'expo-file-system';

const krakowiokWedrowny = require('./../assets/music/Krakowiok_wedrowny.mp3');
const krakowiokLiteracki = require('./../assets/music/Krakowiok_literacki.mp3');
const spiewnikPdf = require('./../assets/documents/spiewnik.pdf');
// const paczkaZip = require('./../assets/documents/PPT2023-PaczkaAudio.zip');

const { width: screenWidth } = Dimensions.get('window');

const DoPobrania = () => {
    const handleDownload = async (asset, fileName) => {
        try {
            const assetObject = Asset.fromModule(asset);
            await assetObject.downloadAsync();
            const localUri = assetObject.localUri || assetObject.uri;

            let permissions = await MediaLibrary.requestPermissionsAsync();
            if (permissions.status !== 'granted') {
                Alert.alert('Brak uprawnień', 'Nie uzyskano dostępu do pamięci urządzenia.');
                return;
            }

            const base64Data = await FileSystem.readAsStringAsync(localUri, { encoding: FileSystem.EncodingType.Base64 });

            const permissionsResponse = await StorageAccessFramework.requestDirectoryPermissionsAsync();
            if (!permissionsResponse.granted) {
                Alert.alert('Brak uprawnień', 'Nie uzyskano dostępu do katalogu.');
                return;
            }

            const newUri = await StorageAccessFramework.createFileAsync(permissionsResponse.directoryUri, fileName, 'application/octet-stream');
            await FileSystem.writeAsStringAsync(newUri, base64Data, { encoding: FileSystem.EncodingType.Base64 });
            Alert.alert('Pobieranie zakończone', `Plik ${fileName} został zapisany w katalogu Downloads.`);

        } catch (error) {
            console.error(error);
            Alert.alert('Błąd', 'Wystąpił problem podczas pobierania pliku. Spróbuj ponownie później.');
        }
    };

    const handleDownloadZip = async () => {
        try {
            Alert.alert('Pobieranie', 'Plik jest w trakcie pobierania...');

            const assetObject = Asset.fromModule(paczkaZip);
            await assetObject.downloadAsync();
            const localUri = assetObject.localUri || assetObject.uri;

            let permissions = await MediaLibrary.requestPermissionsAsync();
            if (permissions.status !== 'granted') {
                Alert.alert('Brak uprawnień', 'Nie uzyskano dostępu do pamięci urządzenia.');
                return;
            }

            const fileInfo = await FileSystem.getInfoAsync(localUri);
            if (!fileInfo.exists) {
                Alert.alert('Błąd', 'Plik nie istnieje w lokalizacji docelowej.');
                return;
            }

            const permissionsResponse = await StorageAccessFramework.requestDirectoryPermissionsAsync();
            if (!permissionsResponse.granted) {
                Alert.alert('Brak uprawnień', 'Nie uzyskano dostępu do katalogu.');
                return;
            }

            const newUri = await StorageAccessFramework.createFileAsync(permissionsResponse.directoryUri, 'PPT2023-PaczkaAudio.zip', 'application/zip');
            await FileSystem.copyAsync({ from: localUri, to: newUri });
            Alert.alert('Pobieranie zakończone', 'Plik został zapisany w katalogu Downloads.');

        } catch (error) {
            console.error(error);
            Alert.alert('Błąd', 'Wystąpił problem podczas pobierania pliku. Spróbuj ponownie później.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.headerText}>Co znajdziesz w zakładce "Do pobrania"?</Text>
            <Text style={styles.bodyText}>
                Linki do Dysku Google, pod którymi znajdziesz nagrania konferencji na każdy dzień oraz postaci dnia.
            </Text>
            <Text style={styles.bodyText}>
                Śpiewnik
            </Text>
            <Text style={styles.bodyText}>
                Duchowe zagajenia Duszograjka.
            </Text>

            <Text style={styles.headerText}>Jak pobrać pliki?</Text>
            <Text style={styles.bodyText}>
                Plik zostanie automatycznie pobrany na Twój smartfon. Upewnij się, że masz wystarczającą ilość wolnego miejsca na urządzeniu.
            </Text>
            <Text style={styles.bodyText}>
                Po pobraniu będziesz mógł otworzyć plik za pomocą odpowiedniego programu, np. czytnika PDF czy aplikacji do edycji dokumentów.
            </Text>

            <TouchableOpacity onPress={() => handleDownload(krakowiokWedrowny, 'Krakowiok_wedrowny.mp3')} style={styles.buttonContainer}>
                <Image source={require('./../assets/krakowiak-wedrowny.png')} style={[styles.buttonImage, styles.largeButtonImage]} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => handleDownload(krakowiokLiteracki, 'Krakowiok_literacki.mp3')} style={styles.buttonContainer}>
                <Image source={require('./../assets/krakowiok-literacki.png')} style={[styles.buttonImage, styles.largeButtonImage]} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => handleDownload(spiewnikPdf, 'spiewnik.pdf')} style={styles.buttonContainer}>
                <Image source={require('./../assets/spiewnik-pdf.png')} style={styles.buttonImage} />
            </TouchableOpacity>
            
            {/* <TouchableOpacity onPress={()=>handleDownload(paczkaZip,'PPT2023-PaczkaAudio.zip')} style={styles.buttonContainer}>
                <Image source={require('./../assets/paczka-zip.png')} style={styles.buttonImage} />
            </TouchableOpacity> */}
            
            <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/drive/folders/1hxXzU9YQn44M6CMLREfN0N731KJkyqmX')} style={styles.buttonContainer}>
                <Image source={require('./../assets/link-do-google.png')} style={styles.buttonImage} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/drive/folders/1-uwIIQHKz2NdWf4aKZL2UZDMGzilI7PM')} style={styles.buttonContainer}>
                <Image source={require('./../assets/postac-dnia.png')} style={styles.buttonImage} />
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    bodyText: {
        fontSize: 16,
        marginVertical: 5,
        textAlign: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonImage: {
        width: screenWidth * 0.9, // Adjust the image width to 90% of the screen width
        height: undefined, // This will allow the height to be automatically adjusted to maintain the aspect ratio
        aspectRatio: 5 / 1, // Adjust the aspect ratio as needed based on your image dimensions
        resizeMode: 'contain',
    },
    largeButtonImage: {
        width: screenWidth, // Adjust the image width to 100% of the screen width for larger images
    },
});

export default DoPobrania;
