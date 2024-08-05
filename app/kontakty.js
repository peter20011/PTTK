import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function Kontakty() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Dyrektor Pielgrzymki */}
      <Text style={styles.dateHeader}>Dyrektor Pielgrzymki:</Text>
      <Text style={styles.nameText}>ks. Paweł Broński</Text>
      <Text style={styles.phoneText}>787 555 585</Text>

      {/* Kierownik zaopatrzenia */}
      <Text style={styles.dateHeader}>Kierownik zaopatrzenia:</Text>
      <Text style={styles.nameText}>ks. Bogusław Tokarz</Text>
      <Text style={styles.phoneText}>505 090 759</Text>

      {/* Kierownicy tras */}
      <Text style={styles.dateHeader}>Kierownicy tras:</Text>
      <Text style={styles.nameText}>ks. Piotr Cichoń</Text>
      <Text style={styles.phoneText}>606 315 497</Text>
      <Text style={styles.nameText}>ks. Tadeusz Piwowarski</Text>
      <Text style={styles.phoneText}>693 558 028</Text>
      <Text style={styles.nameText}>ks. Michał Duch</Text>
      <Text style={styles.phoneText}>577 849 230</Text>

      {/* Liturgia */}
      <Text style={styles.dateHeader}>Liturgia:</Text>
      <Text style={styles.nameText}>ks. Bogusław Sobusiak</Text>
      <Text style={styles.phoneText}>504 757 136</Text>

      {/* Sekretariat PPT */}
      <Text style={styles.dateHeader}>Sekretariat PPT:</Text>
      <Text style={styles.nameText}>Maria Augustyn</Text>
      <Text style={styles.phoneText}>691 315 087</Text>

      {/* Schola pielgrzymkowa */}
      <Text style={styles.dateHeader}>Schola pielgrzymkowa:</Text>
      <Text style={styles.nameText}>Magdalena Drozd</Text>
      <Text style={styles.phoneText}>663 583 192</Text>

      {/* Nagłośnienie */}
      <Text style={styles.dateHeader}>Nagłośnienie:</Text>
      <Text style={styles.nameText}>Hubert Hajduk</Text>
      <Text style={styles.phoneText}>609 459 743</Text>

      {/* Centrum medyczne */}
      <Text style={styles.dateHeader}>Centrum medyczne:</Text>
      <Text style={styles.nameText}>Henryk Jarzębak - ratownik medyczny</Text>
      <Text style={styles.phoneText}>782 338 883</Text>

      {/* Nr konta PPT */}
      <Text style={styles.dateHeader}>Nr konta PPT:</Text>
      <Text style={styles.scheduleText}>09 1020 3453 0000 8302 0352 3115</Text>
      <Text style={styles.scheduleText}>Piesza Pielgrzymka Tarnowska</Text>
      <Text style={styles.scheduleText}>ul. Papieska 10</Text>
      <Text style={styles.scheduleText}>33-340 Stary Sącz</Text>

      {/* KSIĘŻA PRZEWODNICY */}
      <Text style={styles.dateHeader}>KSIĘŻA PRZEWODNICY:</Text>
      <Text style={styles.dateHeader}>Część A:</Text>
      <Text style={styles.nameText}>1. Najśw. Maryja - ks. Marek Wojak</Text>
      <Text style={styles.phoneText}>792 675 918</Text>
      <Text style={styles.nameText}>2. Św. Franciszek - ks. Stanisław Łukasik</Text>
      <Text style={styles.phoneText}>661 868 340</Text>
      <Text style={styles.nameText}>3. Św. Albert - ks. Sebastian Ligęska</Text>
      <Text style={styles.phoneText}>796 625 637</Text>
      <Text style={styles.nameText}>4. Św. Wincenty - ks. Michał Radziwiłł</Text>
      <Text style={styles.phoneText}>512 102 527</Text>
      <Text style={styles.nameText}>5. Św. Florian - ks. Grzegorz Sroka</Text>
      <Text style={styles.phoneText}>504 789 115</Text>
      <Text style={styles.nameText}>6. Bł. Maria Teresa - ks. Jakub Misiak</Text>
      <Text style={styles.phoneText}>887 798 234</Text>
      <Text style={styles.nameText}>7. Św. Józef - ks. Mateusz Wojcieszak</Text>
      <Text style={styles.phoneText}>514 252 157</Text>
      <Text style={styles.nameText}>8. Św. Stanisław - ks. Łukasz Polniaszek</Text>
      <Text style={styles.phoneText}>512 549 049</Text>
      <Text style={styles.nameText}>9. Św. Maksymilian - ks. Marcin Górski</Text>
      <Text style={styles.phoneText}>505 560 214</Text>
      <Text style={styles.nameText}>10. Św. Magdalena - ks. Marcin Górski</Text>
      <Text style={styles.phoneText}>11. Św. Jadwiga - ks. Rafał Jagoda</Text>
      <Text style={styles.phoneText}>668 603 202</Text>
      <Text style={styles.nameText}>12. Św. Michał - ks. Zygmunt Ogórek</Text>
      <Text style={styles.phoneText}>609 527 634</Text>
      <Text style={styles.nameText}>13. Św. Dominik - ks. Paweł Kasperowicz</Text>
      <Text style={styles.phoneText}>666 252 988</Text>

      <Text style={styles.dateHeader}>Część B:</Text>
      <Text style={styles.nameText}>14. Św. Świerad - ks. Rafał Łukasik</Text>
      <Text style={styles.phoneText}>600 811 643</Text>
      <Text style={styles.nameText}>15. Św. Jacek - ks. Tomasz Koźbiał</Text>
      <Text style={styles.phoneText}>512 688 634</Text>
      <Text style={styles.nameText}>16. Św. Szymon - ks. Rafał Mirosławski</Text>
      <Text style={styles.phoneText}>606 112 375</Text>
      <Text style={styles.nameText}>17. Św. Rafał - ks. Rafał Mirosławski</Text>
      <Text style={styles.phoneText}>18. Św. Wojciech - ks. Rafał Mirosławski</Text>
      <Text style={styles.phoneText}>19. Św. Kinga - ks. Stanisław Kłyś</Text>
      <Text style={styles.phoneText}>607 991 331</Text>
      <Text style={styles.nameText}>20. Św. Kazimierz - ks. Bartłomiej Musiał</Text>
      <Text style={styles.phoneText}>690 378 764</Text>
      <Text style={styles.nameText}>21. Bł. Karolina - ks. Marcin Kurmaniak</Text>
      <Text style={styles.phoneText}>506 603 976</Text>
      <Text style={styles.nameText}>22. Św. Małgorzata - ks. Sylwester Pustułka</Text>
      <Text style={styles.phoneText}>514 981 628</Text>
      <Text style={styles.nameText}>23. Św. Jan Kanty - ks. Marcin Niwa</Text>
      <Text style={styles.phoneText}>880 870 734</Text>
      <Text style={styles.nameText}>24. Św. Klemens - o. Artur Prus CSSR</Text>
      <Text style={styles.phoneText}>511 978 683</Text>
      <Text style={styles.nameText}>25. Św. Just - ks. Damian Pitwor</Text>
      <Text style={styles.phoneText}>506 841 122</Text>
      <Text style={styles.nameText}>26. Św. Katarzyna - ks. Paweł Łebski</Text>
      <Text style={styles.phoneText}>507 602 277</Text>

      <Text />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "4%",
    paddingHorizontal: "4%",
    paddingBottom: "5%",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  dateHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  nameText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 5,
  },
  phoneText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 15,
  },
  scheduleText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 3,
  },
});
