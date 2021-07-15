import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

// Utilities Import
import Color from '../../themes/colors';
import * as Strings from '../../constants/strings';
import * as Constants from '../../constants/const';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import { validateEmail } from '../../services/authValidator/validator';

// Components Import
import { AuthLanguageDropdown } from '../../components/authLanguageDropdown';
import { AuthFooter } from '../../components/authFooter';
import { LoginInput } from '../login-screen/components/loginInput';
import { LoginButton } from '../login-screen/components/loginButton';

const ResetPwdScreen = (props) => {
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    // const [isValidated, setIsValidated] = React.useState(false);

    const language = useSelector(state => state.app.language);

    const handleResetPassword = () => {
        // setEmailError(validateEmail(email, language));
    }

    return (
        <View style={styles.screen}>
            <AuthLanguageDropdown />
            <View style={styles.container1}>
                <Text style={styles.screenTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.retrieve.title) : (Strings.English.retrieve.title)}</Text>
                <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.retrieve.explain) : (Strings.English.retrieve.explain)}</Text>
            </View>

            <View style={styles.container2}>
                <View style={styles.validationContainer}>
                    <Text style={styles.subtitle}>{Strings.Vietnamese.retrieve.email}</Text>
                    {/* <Text style={styles.subtitle3}>{emailError}</Text> */}
                </View>
                <LoginInput 
                inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.retrieve.placeHolder.email) : (Strings.English.retrieve.placeHolder.email)}
                onChangeText={email => setEmail(email)}
                value={email}
                secureText={false}
                reveal={false}
                />

                <LoginButton 
                loginFunc={handleResetPassword}
                buttonTitle={(language.name === Constants.VN) ? (Strings.Vietnamese.retrieve.button) : (Strings.English.retrieve.button)}
                />

                <View style={styles.clickContainer}>
                    <TouchableOpacity onPress={() => props.navigation.goBack() }>
                        <Text style={styles.subtitle2}>{(language.name === Constants.VN) ? (Strings.Vietnamese.retrieve.signin) : (Strings.English.retrieve.signin)}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container3}>
                <AuthFooter />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Color.color_white,
        paddingTop: 10
    },
    screenTitle: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        color: Color.color_black,
        marginTop: 30
    },
    subtitle: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: Color.color_black
    },
    subtitle2: {
        fontSize: RFPercentage(2.2),
        fontWeight: 'bold',
        color: Color.text_pressable,
        marginTop: 15
    },
    subtitle3: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: Color.color_warning,
        marginLeft: 5
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 15,
        paddingHorizontal: 40
    },
    container2: {
        flex: 2.3,
        paddingHorizontal: 40,
        paddingTop: 15
    },
    container3: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    clickContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    validationContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    }
});

export default ResetPwdScreen;