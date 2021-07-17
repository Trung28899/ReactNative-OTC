import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Color from '../themes/colors';

export const ErrorPopup = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        borderRadius: 15,
        backgroundColor: Color.border_primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    text: {
        color: Color.text_warning,
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        textAlign: 'center'
    }
});