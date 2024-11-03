import React from 'react';
import { Text, StyleSheet, GestureResponderEvent, TouchableHighlight } from 'react-native';

interface KeyboardButtonProps {
    isWhiteKey: boolean;
    pitch: string;
}

export default function KeyboardButton({ isWhiteKey, pitch }: KeyboardButtonProps) {
    const handlePress = (e: GestureResponderEvent) => {
        console.log(pitch);
    };

    return (
        <TouchableHighlight
            style={isWhiteKey ? styles.whiteKey : styles.blackKey}
            onPress={handlePress}
            underlayColor={isWhiteKey ? "#dddddd" : "#333333"}
        >
            <Text style={isWhiteKey ? styles.whiteKeyText : styles.blackKeyText}>{pitch}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    whiteKey: {
        width: 48,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#dddddd',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    blackKey: {
        width: 40,
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 4,
        borderColor: '#1c1c1c',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    whiteKeyText: {
        position: 'absolute',
        bottom: 10,
        color: '#7a7a7a',
        fontFamily: 'serif',
        fontSize: 25
    },
    blackKeyText: {
        position: 'absolute',
        bottom: 10,
        color: '#7a7a7a',
        fontFamily: 'serif',
        fontSize: 18
    },
});
