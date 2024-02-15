import { router } from "expo-router";
import { StyleSheet, Animated, View,Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const logoWidth = width;
const logoHeight = logoWidth;

export default function index() {

    const logoOpacity = new Animated.Value(0);

    setTimeout(() => {
        router.push("/home");
    },2500);
    
    return (
        <View style={styles.container}>
            <Animated.Image
                source={require("../assets/logo.png")}
                style={[styles.logo, {opacity: logoOpacity,width: logoWidth, height: logoHeight}]}
                onLoadEnd={() => {
                    Animated.timing(logoOpacity, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }).start();
                }}
            />
        </View>
    
    );
};


const styles = StyleSheet.create({
    scrollViewContainer:{
        flex:1,
        justifyContent: 'center',
        margin: 'auto',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', // Białe tło z delikatnym odcieniem szarości
    },
    logo: {
     alignSelf: "center",
    },
  });