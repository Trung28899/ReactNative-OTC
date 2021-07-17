import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// Utilities Import
import Color from '../../../themes/colors';
import * as Strings from '../../../constants/strings';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const LoginButton = (props) => {
    return (
        <TouchableOpacity 
        style={styles.container}
        onPress={props.loginFunc}
        >
            <View style={styles.buttonContainer}>
                <Text style={styles.button}>{props.buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: Color.text_pressable,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: Color.color_white
    }
});