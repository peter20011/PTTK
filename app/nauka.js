import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Nauka(){
    return (
        <View style={styles.container}>
            <Text>Nauka</Text>
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