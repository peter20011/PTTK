import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function ModlitwaWieczorna(){
    return (
        <View style={styles.container}>
            <Text>ModlitwaWieczorna</Text>
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