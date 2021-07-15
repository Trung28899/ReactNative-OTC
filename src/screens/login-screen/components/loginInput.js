import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// Utilities Import
import Color from '../../../themes/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

// Components Import
import Icon from 'react-native-vector-icons/Ionicons';

export const LoginInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder={props.inputText}
            placeholderTextColor={Color.text_primary}
            onChangeText={props.onChangeText}
            value={props.value}
            secureTextEntry={props.secureText}
            style={styles.input}
            />
            { props.reveal ? (
                <TouchableOpacity
                style={styles.revealContainer}
                onPress={props.revealFunc}
                >
                    <Icon 
                    name={props.iconName}
                    size={22}
                    color={Color.color_black}
                    />
                </TouchableOpacity>
            ) : (
                <View />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderColor: Color.color_black,
        borderWidth: 1,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    input: {
        fontWeight: 'bold',
        fontSize: RFPercentage(2),
        color: Color.color_black,
        width: '80%'
    },
    revealContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'flex-end',
        marginRight: 5
    },
});