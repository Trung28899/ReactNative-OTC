import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// Utilities Import
import { useSelector } from 'react-redux';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Color from '../themes/colors';
import { useDispatch } from 'react-redux';
import * as appActions from '../store/app/appActions';

// Components Import
import Icon from 'react-native-vector-icons/Ionicons';
import { LanguageModal } from './languageModal';

export const AuthLanguageDropdown = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const language = useSelector(state => state.app.language);
    const dispatch = useDispatch();

    let imageSrc = require('../assets/images/flag_english.png');

    if (language.index === 0)
        imageSrc = require('../assets/images/flag_vietnam.png');
    else if (language.index === 1)
        imageSrc = require('../assets/images/flag_english.png');

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={styles.imageContainer}>
                        <Image 
                        style={styles.image}
                        source={imageSrc}
                        />
                    </View>
                    <Text style={styles.text}>{language.name}</Text>
                    <Icon 
                    name='caret-down-outline'
                    size={20}
                    color={Color.color_black}
                    />
                </View>
            </TouchableOpacity>

            <LanguageModal 
            modalVisible={modalVisible}
            vnSelect={() => {
                dispatch(appActions.languageVn());
                setModalVisible(false);
            }}
            enSelect={() => {
                dispatch(appActions.languageEn());
                setModalVisible(false);
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 150,
        position: 'absolute',
        marginRight: 10,
        marginTop: 15,
        right: 0,
        top: 0,
        paddingHorizontal: 5
    },
    imageContainer: {
        height: 30,
        width: 30,
        borderRadius: 100,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    text: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: Color.color_black
    }
});