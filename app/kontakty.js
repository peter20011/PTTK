import React from "react";
import {ScrollView, Text, StyleSheet} from "react-native";

export default function Kontakty() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Dyrektor Pielgrzymki */}
        <Text style={styles.dateHeader}>Dyrektor Pielgrzymki:</Text>
        <Text style={styles.scheduleText}>ks. Paweł Broński: 787 555 585</Text>
  
        {/* Kierownik zaopatrzenia */}
        <Text style={styles.dateHeader}>Kierownik zaopatrzenia:</Text>
        <Text style={styles.scheduleText}>ks. Bogusław Tokarz: 505 090 759</Text>
  
        {/* Kierownicy tras */}
        <Text style={styles.dateHeader}>Kierownicy tras:</Text>
        <Text style={styles.scheduleText}>ks. Piotr Cichoń: 606 315 497</Text>
        <Text style={styles.scheduleText}>ks. Tadeusz Piwowarski: 693 558 028</Text>
        <Text style={styles.scheduleText}>ks. Michał Duch: 577 849 230</Text>
  
        {/* Liturgia */}
        <Text style={styles.dateHeader}>Liturgia:</Text>
        <Text style={styles.scheduleText}>ks. Bogusław Sobusiak: 504 757 136</Text>
  
        {/* Sekretariat PPT */}
        <Text style={styles.dateHeader}>Sekretariat PPT:</Text>
        <Text style={styles.scheduleText}>Maria Augustyn: 691 315 087</Text>
  
        {/* Schola pielgrzymkowa */}
        <Text style={styles.dateHeader}>Schola pielgrzymkowa:</Text>
        <Text style={styles.scheduleText}>Magdalena Drozd: 663 583 192</Text>
  
        {/* Nagłośnienie */}
        <Text style={styles.dateHeader}>Nagłośnienie:</Text>
        <Text style={styles.scheduleText}>Hubert Hajduk: 609 459 743</Text>
  
        {/* Centrum medyczne */}
        <Text style={styles.dateHeader}>Centrum medyczne:</Text>
        <Text style={styles.scheduleText}>Henryk Jarzębak - ratownik medyczny: 782 338 883</Text>
  
        {/* Nr konta PPT */}
        <Text style={styles.dateHeader}>Nr konta PPT:</Text>
        <Text style={styles.scheduleText}>
          09 1020 3453 0000 8302 0352 3115
        </Text>
        <Text style={styles.scheduleText}>Piesza Pielgrzymka Tarnowska</Text>
        <Text style={styles.scheduleText}>ul. Papieska 10</Text>
        <Text style={styles.scheduleText}>33-340 Stary Sącz</Text>
  
        {/* KSIĘŻA PRZEWODNICY */}
        <Text style={styles.dateHeader}>KSIĘŻA PRZEWODNICY:</Text>
        <Text style={styles.dateHeader}>Część A:</Text>
        <Text style={styles.scheduleText}>1. Najśw. Maryja - ks. Marek Wojak: 792 675 918</Text>
        <Text style={styles.scheduleText}>2. Św. Franciszek - ks. Stanisław Łukasik: 661 868 340</Text>
        <Text style={styles.scheduleText}>3. Św. Albert - ks. Sebastian Ligęska: 796 625 637</Text>
        <Text style={styles.scheduleText}>4. Św. Wincenty - ks. Michał Radziwiłł: 512 102 527</Text>
        <Text style={styles.scheduleText}>5. Św. Florian - ks. Grzegorz Sroka: 504 789 115</Text>
        <Text style={styles.scheduleText}>6. Bł. Maria Teresa - ks. Jakub Misiak: 887 798 234</Text>
        <Text style={styles.scheduleText}>7. Św. Józef - ks. Mateusz Wojcieszak: 514 252 157</Text>
        <Text style={styles.scheduleText}>8. Św. Stanisław - ks. Łukasz Polniaszek: 512 549 049</Text>
        <Text style={styles.scheduleText}>9. Św. Maksymilian - ks. Marcin Górski: 505 560 214</Text>
        <Text style={styles.scheduleText}>10. Św. Magdalena - ks. Marcin Górski</Text>
        <Text style={styles.scheduleText}>11. Św. Jadwiga - ks. Rafał Jagoda: 668 603 202</Text>
        <Text style={styles.scheduleText}>12. Św. Michał - ks. Zygmunt Ogórek: 609 527 634</Text>
        <Text style={styles.scheduleText}>13. Św. Dominik - ks. Paweł Kasperowicz: 666 252 988</Text>

        <Text style={styles.dateHeader}>Część B:</Text>
        <Text style={styles.scheduleText}>14. Św. Świerad - ks. Rafał Łukasik: 600 811 643</Text>
        <Text style={styles.scheduleText}>15. Św. Jacek - ks. Tomasz Koźbiał: 512 688 634</Text>
        <Text style={styles.scheduleText}>16. Św. Szymon - ks. Rafał Mirosławski: 606 112 375</Text>
        <Text style={styles.scheduleText}>17. Św. Rafał - ks. Rafał Mirosławski</Text>
        <Text style={styles.scheduleText}>18. Św. Wojciech - ks. Rafał Mirosławski</Text>
        <Text style={styles.scheduleText}>19. Św. Kinga - ks. Stanisław Kłyś: 607 991 331</Text>
        <Text style={styles.scheduleText}>20. Św. Kazimierz - ks. Bartłomiej Musiał: 690 378 764</Text>
        <Text style={styles.scheduleText}>21. Bł. Karolina - ks. Marcin Kurmaniak: 506 603 976</Text>
        <Text style={styles.scheduleText}>22. Św. Małgorzata - ks. Sylwester Pustułka: 514 981 628</Text>
        <Text style={styles.scheduleText}>23. Św. Jan Kanty - ks. Marcin Niwa: 880 870 734</Text>
        <Text style={styles.scheduleText}>24. Św. Klemens - o. Artur Prus CSSR: 511 978 683</Text>
        <Text style={styles.scheduleText}>25. Św. Just - ks. Damian Pitwor: 506 841 122</Text>
        <Text style={styles.scheduleText}>26. Św. Katarzyna - ks. Paweł Łebski: 507 602 277</Text>
  
        <Text/>
        <Text/>
        <Text/>
      </ScrollView>
    );
  }

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
      marginTop: 20,
      marginBottom: 10,
    },
    scheduleText: {
      textAlign: 'center',
      fontSize: 17,
      marginBottom: 5,
    },
    info:{
        fontSize: 17,
        marginBottom: 5,
        textAlign: 'left',
    }
  });