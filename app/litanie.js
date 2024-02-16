import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Litanie(){
    return (
        <View style={styles.container}>
            <Text>Litanie</Text>
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