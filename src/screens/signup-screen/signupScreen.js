import React from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

// Utilities Import
import Color from '../../themes/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as Strings from '../../constants/strings';
import * as Constants from '../../constants/const';
import { useDispatch, useSelector } from 'react-redux';

// Components Import
import { AuthLanguageDropdown } from '../../components/authLanguageDropdown';
import { LoginInput } from '../login-screen/components/loginInput';
import { LoginButton } from '../login-screen/components/loginButton';

// Services Import
import { 
    validateEmail,
    validateFullname,
    validateUsername,
    validateSerialNo,
    validatePassword 
} from '../../services/authValidator/validator';

const SignupScreen = (props) => {
    // Storing Inputs
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [cardno, setCardno] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSecure, setIsSecure] = React.useState(true);
    // const [isValidated, setIsValidated] = React.useState(false);

    // Handling Error Messages
    // const [emailError, setEmailError] = React.useState('');
    // const [fnameError, setFnameError] = React.useState('');
    // const [unameError, setUnameError] = React.useState('');
    // const [serialError, setSerialError] = React.useState('');
    // const [passwordError, setPasswordError] = React.useState('');

    //const dispatch = useDispatch();
    const language = useSelector(state => state.app.language);

    const handleRegister = () => {
        // setEmailError(validateEmail(email, language));
        // setFnameError(validateFullname(name, language));
        // setUnameError(validateUsername(username, language));
        // setSerialError(validateSerialNo(cardno, language));
        // setPasswordError(validatePassword(password, language));
    };

    return (
        <View style={styles.screen}>
            <AuthLanguageDropdown />
            <View style={styles.container1}>
                <Text style={styles.screenTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.title + ' ' + Strings.Vietnamese.signUp.title2) : (Strings.English.signUp.title + ' ' + Strings.English.signUp.title2)}</Text>
            </View>

            <View style={styles.container2}>
                <View style={styles.validationContainer}>
                    <Text style={styles.subtitle}>{Strings.Vietnamese.signUp.email}</Text>
                    {/* <Text style={styles.subtitle2}>{emailError}</Text> */}
                </View>
                <LoginInput 
                inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.email) : (Strings.English.signUp.placeHolder.email)}
                onChangeText={email => setEmail(email)}
                value={email}
                secureText={false}
                reveal={false}
                />

                <View style={styles.validationContainer}>
                    <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.fullname) : (Strings.English.signUp.fullname)}</Text>
                    {/* <Text style={styles.subtitle2}>{fnameError}</Text> */}
                </View>
                <LoginInput 
                inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.fullname) : (Strings.English.signUp.placeHolder.fullname)}
                onChangeText={name => setName(name)}
                value={name}
                secureText={false}
                reveal={false}
                />

                <View style={styles.validationContainer}>
                    <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.username) : (Strings.English.signUp.username)}</Text>
                    {/* <Text style={styles.subtitle2}>{unameError}</Text> */}
                </View>
                <LoginInput 
                inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.username) : (Strings.English.signUp.placeHolder.username)}
                onChangeText={username => setUsername(username)}
                value={username}
                secureText={false}
                reveal={false}
                />

                <View style={styles.validationContainer}>
                    <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.serialCode) : (Strings.English.signUp.serialCode)}</Text>
                    {/* <Text style={styles.subtitle2}>{serialError}</Text> */}
                </View>
                <LoginInput 
                inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.serialNo) : (Strings.English.signUp.placeHolder.serialNo)}
                onChangeText={cardno => setCardno(cardno)}
                value={cardno}
                secureText={false}
                reveal={false}
                />

                <View style={styles.validationContainer}>
                    <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.password) : (Strings.English.signUp.password)}</Text>
                    {/* <Text style={styles.subtitle2}>{passwordError}</Text> */}
                </View>
                <LoginInput 
                inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.password) : (Strings.English.signUp.placeHolder.password)}
                onChangeText={password => setPassword(password)}
                value={password}
                secureText={isSecure}
                reveal={true}
                revealFunc={() => setIsSecure(!isSecure)}
                iconName={isSecure ? 'eye-outline' : 'eye-off-outline'}
                />

                <LoginButton 
                loginFunc={handleRegister}
                buttonTitle={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.button.signup) : (Strings.English.signUp.button.signup)}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.already) : (Strings.English.signUp.already)}</Text>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Text style={styles.clickableText}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.button.signin) : (Strings.English.signUp.button.signin)}</Text>
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
    screenTitle: {
        fontSize: RFPercentage(2.8),
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
        flex: 5.5,
        paddingHorizontal: 40
    },
    textContainer: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: Color.color_black
    },
    clickableText: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: Color.text_pressable,
        marginLeft: 10
    },
    validationContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default SignupScreen;