import React from "react";
import {Text, StyleSheet, ScrollView} from "react-native";

export default function Ramowka(){
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <Text style={styles.dateHeader}>RAMÓWKA PIELGRZYMKOWA RADIA RDN MAŁOPOLSKA I RADIA NOWY SĄCZ</Text>
        <Text style={styles.dateHeader}>17.08 - wyjście pielgrzymów z Tarnowa</Text>
        <Text style={styles.scheduleText}>6:00 - Studio pielgrzymkowe (tylko w tym dniu będzie studio poranne o tej godzinie)</Text>
        <Text style={styles.scheduleText}>6:30 - Transmisja Mszy św. z pl. Katedralnego</Text>
        <Text style={styles.scheduleText}>10:40 - Studio pielgrzymkowe</Text>
        <Text style={styles.scheduleText}>14:58 - Intencje pielgrzymów</Text>
        <Text style={styles.scheduleText}>15:00 - Koronka</Text>
        <Text style={styles.scheduleText}>16:40 - Pozdrowienia z pielgrzymki</Text>
        <Text style={styles.scheduleText}>19:00 - Studio pielgrzymkowe</Text>
        <Text style={styles.scheduleText}>20:10 - Duchowe pielgrzymowanie (nagrane konferencje)</Text>
        <Text style={styles.scheduleText}>20:30 - Apel (ok. 21:00 - zakończenie)</Text>
        <Text/>
        <Text style={styles.dateHeader}>25.08 - wyjście pielgrzymów na Jasną Górę</Text>
        <Text style={styles.scheduleText}>10:40 - Studio pielgrzymkowe</Text>
        <Text style={styles.scheduleText}>14:00 - 16:30 - Transmisja z wejścia pielgrzymów</Text>
        <Text style={styles.scheduleText}>17:00 - Transmisja Mszy św. - ks. bp Andrzej Jeż</Text>
        <Text/>
        <Text style={styles.dateHeader}>Transmisje pozostałych mszy św. z trasy 41. PPT:</Text>
        <Text style={styles.scheduleText}>18.08. Zabawa - godz. 6:30 (piątek)</Text>
        <Text style={styles.scheduleText}>19.08. Nowe Brzesko - godz.7:30 (sobota) (nie ma w tym dniu wejścia między 13.00 a 14.30)</Text>
        <Text style={styles.scheduleText}>20.08. Racławice - godz.10:30 (niedziela) (nie ma w tym dniu wejścia między 13.00 a 14.30)</Text>
        <Text style={styles.scheduleText}>21.08. Miechów -7:30 (poniedziałek)</Text>
        <Text style={styles.scheduleText}>22.08. Żarnowiec - 7:30 (wtorek)</Text>
        <Text style={styles.scheduleText}>23.08. Sokolniki - 8:30 (środa)</Text>
        <Text style={styles.scheduleText}>24.08. Trzebniów - Skałki - godz.8:00 (czwartek)</Text>
        <Text style={styles.scheduleText}>25.08. Jasna Góra - godz.17:00 (piątek)</Text>
        <Text/>
        <Text style={styles.dateHeader}>Transmisja modlitwy różańcowej i apelu prowadzonych przez poszczególne grupy:</Text>
        <Text style={styles.scheduleText}>17.08. - różaniec - gr. 22, apel - gr. 6</Text>
        <Text style={styles.scheduleText}>18.08. - różaniec - gr. 8, apel - gr. 23</Text>
        <Text style={styles.scheduleText}>19.08. - różaniec - gr. 7, apel - gr. 15</Text>
        <Text style={styles.scheduleText}>20.08. - różaniec - gr. 25, apel - gr. 12</Text>
        <Text style={styles.scheduleText}>21.08. - różaniec - gr. 16-18, apel - gr. 13</Text>
        <Text style={styles.scheduleText}>22.08. - różaniec - gr. 11, apel - gr. 26</Text>
        <Text style={styles.scheduleText}>23.08. - różaniec - gr. 9, apel - gr. 14</Text>
        <Text style={styles.scheduleText}>24.08. - różaniec - gr. 2, apel - gr. 19</Text>
        <Text/>
        <Text/>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: '4%',
        paddingHorizontal: '4%',
        paddingBottom: '10%',
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    dateHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 4,
    },
    scheduleText: {
        textAlign: 'center',
        fontSize: 17,
        marginVertical: 1,
    },
    
});