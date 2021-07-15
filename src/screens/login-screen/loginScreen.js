import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// Utilities Import
import Color from '../../themes/colors';
import * as Constants from '../../constants/const';
import * as Strings from '../../constants/strings';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import { 
    validateUsername, 
    validatePassword 
} from '../../services/authValidator/validator';

// Components Import
import { LoginInput } from './components/loginInput';
import { LoginButton } from './components/loginButton';
import { AuthFooter } from '../../components/authFooter';
import { AuthLanguageDropdown } from '../../components/authLanguageDropdown';

const LoginScreen = (props) => {
    // Storing Inputs
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSecure, setIsSecure] = React.useState(true);
    // const [isValidated, setIsValidated] = React.useState(false);

    // Handling Error Messages
    // const [usernameError, setUsernameError] = React.useState('');
    // const [passwordError, setPasswordError] = React.useState('');

    const language = useSelector(state => state.app.language);

    const handleForgotPassword = () => {
        props.navigation.navigate('ResetPwd');
    };

    const handleLogin = () => {
        // setUsernameError(validateUsername(username, language));
        // setPasswordError(validatePassword(password, language));
    };

    const handleSignup = () => {
        props.navigation.navigate('Signup');
    };

    return (
        <View style={styles.screen}>
            <AuthLanguageDropdown />
            <View style={styles.container1}>
                <Text style={styles.screenTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.title + ' ' + Strings.Vietnamese.signIn.title2) : (Strings.English.signIn.title + ' ' + Strings.English.signIn.title2)}</Text>
            </View>

            <View style={styles.container2}>
                <View style={{ width: '100%', height: '100%' }}>
                    <View style={styles.validationContainer}>
                        <Text style={styles.inputTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.email) : (Strings.English.signIn.email)}</Text>
                        {/* <Text style={styles.subtitle}>{usernameError}</Text> */}
                    </View>
                    <LoginInput 
                    inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.placeHolder.email) : (Strings.English.signIn.placeHolder.email)}
                    onChangeText={username => setUsername(username)}
                    value={username}
                    secureText={false}
                    reveal={false}
                    />

                    <View style={styles.validationContainer}>
                        <Text style={styles.inputTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.password) : (Strings.English.signIn.password)}</Text>
                        {/* <Text style={styles.subtitle}>{passwordError}</Text> */}
                    </View>
                    <LoginInput 
                    inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.placeHolder.password) : (Strings.English.signIn.placeHolder.password)}
                    onChangeText={password => setPassword(password)}
                    value={password}
                    secureText={isSecure}
                    reveal={true}
                    revealFunc={() => setIsSecure(!isSecure)}
                    iconName={isSecure ? 'eye-outline' : 'eye-off-outline'}
                    />

                    <View style={styles.forgotPwdContainer}>
                        <TouchableOpacity 
                        onPress={handleForgotPassword}
                        >
                            <Text style={styles.clickableText}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.button.forgot) : (Strings.English.signIn.button.forgot)}</Text>
                        </TouchableOpacity>
                    </View>

                    <LoginButton 
                    loginFunc={handleLogin}
                    buttonTitle={(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.button.signin) : (Strings.English.signIn.button.signin)}
                    />

                    <View style={styles.registerContainer}>
                        <Text style={styles.normalText}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.signUpTitle) : (Strings.English.signIn.signUpTitle)}</Text>
                        <TouchableOpacity
                        onPress={handleSignup}
                        style={{ marginLeft: 10 }}
                        >
                            <Text style={styles.clickableText}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.button.signup) : (Strings.English.signIn.button.signup)}</Text>
                        </TouchableOpacity>
                    </View>
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
        color: Color.color_warning,
        marginLeft: 5
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        flex: 2.3,
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    container3: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    inputTitle: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: Color.color_black,
        marginBottom: 10
    },
    normalText: {
        fontSize: RFPercentage(2),
        color: Color.color_black
    },
    clickableText: {
        fontSize: RFPercentage(2),
        color: Color.text_pressable,
        fontWeight: 'bold'
    },
    forgotPwdContainer: {
        width: '100%', 
        height: 35, 
        alignItems: 'flex-end'
    },
    registerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    validationContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default LoginScreen;