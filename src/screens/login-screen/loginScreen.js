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

    const language = useSelector(state => state.app.language);

    const handleForgotPassword = () => {
        props.navigation.navigate('ResetPwd');
    };

    const handleLogin = () => {

    };

    const handleSignup = () => {
        props.navigation.navigate('Signup');
    };

    return (
        <View style={styles.screen}>
            <AuthLanguageDropdown />
            
            <View style={styles.container1}>
                <Text style={styles.screenTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.title) : (Strings.English.signIn.title)}</Text>
                <Text style={styles.screenTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.title2) : (Strings.English.signIn.title2)}</Text>
            </View>

            <View style={styles.container2}>
                <Text style={styles.inputTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.email) : (Strings.English.signIn.email)}</Text>
                <LoginInput 
                inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.placeHolder.email) : (Strings.English.signIn.placeHolder.email)}
                onChangeText={username => setUsername(username)}
                value={username}
                secureText={false}
                reveal={false}
                />

                <Text style={styles.inputTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signIn.password) : (Strings.English.signIn.password)}</Text>
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
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Color.color_white,
        paddingTop: 10
    },
    container1: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40
    },
    container2: {
        flex: 2.5,
        paddingHorizontal: 45
    },
    screenTitle: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: Color.color_black
    },
    inputTitle: {
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        color: Color.color_black,
        marginBottom: 10
    },
    clickableText: {
        fontSize: RFPercentage(1.8),
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
        justifyContent: 'center',
        marginTop: 15
    },
    normalText: {
        fontSize: RFPercentage(1.8),
        color: Color.color_black
    }
});

export default LoginScreen;