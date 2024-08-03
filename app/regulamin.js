import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";

export default function Regulamin() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.scheduleText}>1. Piesza Pielgrzymka Tarnowska na Jasną Górę jest organizowana przez Kurię Diecezjalną w Tarnowie.</Text>
            <Text style={styles.scheduleText}>2. Pielgrzymka jest czytelnym znakiem wędrującego Kościoła, który w drodze uświęca się przez prawdę i miłość. Jest aktem wyłącznie religijno - pokutnym. Zatem odznacza się duchem modlitwy i ofiary oraz porządkiem zewnętrznym.</Text>
            <Text style={styles.scheduleText}>3. Uczestnicy, decydując się na udział w pielgrzymce, winni kierować się motywami religijnymi i dbać - pod sankcją usunięcia - aby religijny charakter pielgrzymki był przestrzegany przez cały czas jej trwania.</Text>
            <Text style={styles.scheduleText}>4. Uczestnikiem pielgrzymki może być tylko ten, kto: we właściwym miejscu i czasie dokona zapisu; akceptuje niniejszy regulamin; będzie stosował się do zarządzeń kierownictwa pielgrzymki.</Text>
            <Text style={styles.scheduleText}>5. Osoby nieletnie: do lat 15 mogą brać udział w pielgrzymce w towarzystwie osoby dorosłej, idącej w tej samej grupie; w wieku 16-18 lat - na podstawie, złożonego wcześniej przy zapisie, pisemnego zezwolenia rodziców lub opiekunów.</Text>
            <Text style={styles.scheduleText}>6. Pielgrzymi codziennie uczestniczą we wspólnej Eucharystii. Troszczą się o klimat, jaki tworzą wokół siebie: życzliwość, kulturę bycia, wrażliwość na potrzeby innych, zwłaszcza słabszych czy starszych; wykorzystują posiadane talenty i dary (np. medyczne, techniczne), muzyczne, włączając się w różne służby.</Text>
            <Text style={styles.scheduleText}>7. Pątnicy zobowiązani są iść w grupach, do których się zapisali. Zdecydowanie zabrania się pielgrzymowania poza grupami. Przebywanie poza grupą jest równoznaczne z wycofaniem się z pielgrzymki.</Text>
            <Text style={styles.scheduleText}>8. Pielgrzymi powinni nosić ze sobą legitymację pielgrzyma. Zwracamy się do siebie „bracie" i „siostro" - ponieważ wszyscy mamy jednego Ojca, który jest w niebie.</Text>
            <Text style={styles.scheduleText}>9. Ze względu na religijno-pokutny charakter pielgrzymki pątników obowiązuje: odpowiedni strój (nie zdejmujemy koszul, nie nosimy szortów); zakaz palenia tytoniu; zakaz picia napojów alkoholowych i używania narkotyków pod groźbą usunięcia.</Text>
            <Text style={styles.scheduleText}>10. Uczestnicy pielgrzymki zobowiązani są do przestrzegania: przepisów Kodeksu Drogowego o ruchu pieszych na drogach publicznych; zarządzeń władz terenowych (zakaz kąpieli w rzekach, jeziorach, rozpalania ognisk, niszczenia przyrody); wskazań służb porządkowych pielgrzymki.</Text>
            <Text style={styles.scheduleText}>11. W miejscach postoju pielgrzymi zachowują czystość, odpadki zostawiamy tylko w miejscach wyznaczonych.</Text>
            <Text style={styles.scheduleText}>12. Noclegi przewiduje się w stodołach i we własnych namiotach lub w innych pomieszczeniach. Niedopuszczalne są noclegi koedukacyjne. W duchu pokuty należy nastawić się na liczne niewygody. Zabiegi higieniczne (mycie, ubikacja) dozwolone są w miejscach wyznaczonych przez gospodarzy. Cisza nocna obowiązuje od godz. 22:00.</Text>
            <Text style={styles.scheduleText}>13. Wyprzedzanie pielgrzymki i wcześniejsze przychodzenie na noclegi jest zabronione. W razie konieczności należy postarać się o przepustkę u lekarza pielgrzymkowego lub przewodnika grupy.</Text>
            <Text style={styles.scheduleText}>14. Uczestnikom pielgrzymki, a tym bardziej osobom postronnym, bez wiedzy kierownictwa, nie wolno rozpowszechniać żadnych materiałów czy emblematów, ani zbierać jakichkolwiek ofiar.</Text>
            <Text style={styles.scheduleText}>15. Za nieprzestrzeganie regulaminu, a także za postawę niezgodną z istotnymi celami i duchem pielgrzymki grożą konsekwencje: upomnienie z wpisem do legitymacji; natychmiastowe usunięcie z pielgrzymki, z podaniem nazwiska pielgrzyma do wiadomości pątników oraz księdza proboszcza.</Text>
            <Text style={styles.scheduleText}>16. Ze względu na bezpieczeństwo pątników pielgrzymce będą mogły towarzyszyć tylko samochody służbowe. Samochody prywatne nie mogą towarzyszyć pielgrzymom. Wyjątek stanowią samochody zgłoszone, oznakowane i pozostające w dyspozycji kierownictwa pielgrzymki. Kierowcy są zobowiązani do przestrzegania przepisów i wskazań Centralnej Służby Porządkowej Pielgrzymki.</Text>
            <Text/>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: '2%',
        paddingHorizontal: '3%',
        paddingBottom: '33%',
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
        textAlign: 'justify',
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 10,
    },
    
});