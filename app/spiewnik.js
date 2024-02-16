import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Spiewnik(){
    return (
        <View style={styles.container}>
            <Text>Spiewnik</Text>
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