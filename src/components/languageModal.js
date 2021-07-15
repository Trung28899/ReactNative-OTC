import React from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

// Utilities Import
import Color from '../themes/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const LanguageModal = (props) => {
    return (
        <Modal
        animationType='fade'
        transparent={true}
        visible={props.modalVisible}
        >
            <View style={styles.container}>
                <View style={styles.container1}>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={props.vnSelect}
                    >
                        <View style={styles.buttonContainer1}>
                            <View style={styles.imageContainer}>
                                <Image 
                                style={styles.image}
                                source={require('../assets/images/flag_vietnam.png')}
                                />
                            </View>
                            <Text style={styles.text}>Tiếng Việt</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={props.enSelect}
                    >
                        <View style={styles.buttonContainer2}>
                            <View style={styles.imageContainer}>
                                <Image 
                                style={styles.image}
                                source={require('../assets/images/flag_english.png')}
                                />
                            </View>
                            <Text style={styles.text}>English</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#rgba(0,0,0,0.5)', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        width: '50%',
        height: 150,
        backgroundColor: Color.color_white,
        borderRadius: 10,
        elevation: 5
    },
    button: {
        width: '100%',
        height: '50%'
    },
    buttonContainer1: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: Color.color_black,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },
    buttonContainer2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: RFPercentage(2),
        color: Color.color_black,
        fontWeight: 'bold'
    },
    imageContainer: {
        height: 35,
        width: 35,
        borderRadius: 100,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
})