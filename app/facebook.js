import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Facebook(){
    return (
        <View style={styles.container}>
            <Text>Facebook</Text>
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