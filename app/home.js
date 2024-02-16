import React from "react";
import { router } from "expo-router";
import { Pressable, StyleSheet,FlatList, View, SafeAreaView, Image, Linking} from "react-native";
import NetInfo from "@react-native-community/netinfo";

const menuData = [
  {id: '1', image: require("../assets/Regulamin.png"), route: "/regulamin"},
  {id: '2', image: require("./../assets/Nauka.png"), route: "/nauka"},
  {id: '3', image: require("./../assets/PostacDnia.png"), route: "/postac-dnia"},
  {id: '4', image: require("./../assets/Trasa.png"), route: "/trasa"},
  {id: '5', image: require("./../assets/Spiewnik.png"), route: "/spiewnik"},
  {id: '6', image: require("./../assets/ModlitwaWieczorna.png"), route: "/modlitwa-wieczorna"},
  {id: '7', image: require("./../assets/litanie.png"), route: "/litanie"},
  {id: '8', image: require("./../assets/MiejscaNoclegowe.png"), route: "/miejsca-noclegowe"},
  {id: '9', image: require("./../assets/do-pobrania.png"), route: "/do-pobrania"},
  {id: '10', image: require("./../assets/ramowka.png"), route: "/ramowka"},
  {id: '11', image: require("./../assets/Kontakty.png"), route: "/kontakty"},
  {id: '12', image: require("./../assets/strona.png"), route: "/strona"},
  {id: '13', image: require("./../assets/Facebook.png"), route: "/facebook"},
  {id: '14', image: require("./../assets/Instagram.png"), route: "/instagram"},
  {id: '15', image: require("./../assets/Youtube.png"), route: "/youtube"}
];

export default function Home(){

  const openLink = async (item) => {
    const isConnected = await NetInfo.fetch().then(state => state.isConnected);
    if (isConnected) {
        if (item.route === '/facebook') {
            Linking.openURL('https://www.facebook.com/pieszapielgrzymkatarnowska');
        }else if (item.route === '/instagram') {
            Linking.openURL('https://www.instagram.com/pptarnowska/');
        }else if (item.route === '/youtube') {
            Linking.openURL('https://www.youtube.com/@pptarnowska/streams');
        } else if (item.route === '/strona') {
            Linking.openURL('https://pielgrzymkatarnowska.pl/');
        }
        else {
            // Obsługa innych przekierowań wewnątrz aplikacji
            router.navigate(item.route);
        }
    } else {
        Alert.alert(
            'Brak połączenia z internetem',
            'Sprawdź swoje połączenie z internetem i spróbuj ponownie.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel' }],
            {
                cancelable: true,
                onDismiss: () => console.log('Alert dismissed'),
            }
        );
    }
};

 
    const renderItem = ({item}) => (
        <View style={styles.iconWrapper} >
            <Pressable onPress={() => openLink(item)}> 
                <Image source={item.image} style={styles.icon} />
            </Pressable>    
        </View>
    )

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <FlatList
                data={menuData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        paddingBottom: '5%',
        paddingHorizontal: '2.5%',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Dostosuj kolor tła
      },
      iconWrapper: {
        margin: '2.5%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      },
      icon: {
        width: '100%',
        height: 160,
        aspectRatio: 1,
        borderRadius: 20
      },
      flatListContainer: {
        alignItems: 'center',
      }
});
