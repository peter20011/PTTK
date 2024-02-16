import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Youtube(){
    return (
        <View style={styles.container}>
            <Text>Youtube</Text>
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