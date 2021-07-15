import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Linking,
    TouchableOpacity,
    Dimensions
} from 'react-native';

// Utilities Import
import Color from '../themes/colors';
import * as Strings from '../constants/strings';
import * as Constants from '../constants/const';
import { useSelector } from 'react-redux';
import { RFPercentage } from 'react-native-responsive-fontsize';

// Components Import
import Icon from 'react-native-vector-icons/Ionicons';

export const AuthFooter = () => {
    const language = useSelector(state => state.app.language);

    const handleHomePage = () => {
        Linking.openURL(Constants.HOME_URL);
    };

    const handleFacebook = () => {
        Linking.openURL(Constants.FACEBOOK_URL);
    };

    const handleInstagram = () => {
        Linking.openURL(Constants.INSTAGRAM_URL);
    };

    const handleYoutube = () => {
        Linking.openURL(Constants.YOUTUBE_URL);
    };

    const handleLinkedin = () => {
        Linking.openURL(Constants.LINKEDIN_URL);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleHomePage}
            >
                <View style={styles.viewContainer}>
                    <Image 
                    source={require('../assets/images/footer_icon.png')}
                    style={styles.image}
                    />
                    <Text style={styles.iconText}>OnTheCard</Text>
                </View>
            </TouchableOpacity>       

            <Text style={styles.text}>{(language.name === Constants.VN) ? (Strings.Vietnamese.footer.smartCard + ' ' + Strings.Vietnamese.footer.vietnam) : (Strings.English.footer.smartCard)}</Text>
            <View style={styles.branchesContainer}>
                <TouchableOpacity onPress={handleFacebook}>
                    <Icon 
                    name='logo-facebook'
                    size={28}
                    color={Color.color_black}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleInstagram}>
                    <Icon 
                    name='logo-instagram'
                    size={28}
                    color={Color.color_black}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleYoutube}>
                    <Icon 
                    name='logo-youtube'
                    size={28}
                    color={Color.color_black}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLinkedin}>
                    <Icon 
                    name='logo-linkedin'
                    size={28}
                    color={Color.color_black}
                    />
                </TouchableOpacity>
            </View>     
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: '100%',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 150,
        height: '50%'
    },
    viewContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: Color.color_black,
        marginVertical: 10
    },
    iconText: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        color: Color.color_black
    },
    branchesContainer: {
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 0.6
    }
});