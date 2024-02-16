import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Kontakty(){
    return (
        <View style={styles.container}>
            <Text>Kontakty</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});