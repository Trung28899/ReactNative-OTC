import React from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity,
    ScrollView
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

    //const dispatch = useDispatch();
    const language = useSelector(state => state.app.language);

    const handleRegister = () => {

    };

    return (
        <View style={styles.screen}>
            <AuthLanguageDropdown />

            <View style={styles.container1}>
                <Text style={styles.screenTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.title) : (Strings.English.signUp.title)}</Text>
                <Text style={styles.screenTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.title2) : (Strings.English.signUp.title2)}</Text>
            </View>

            <View style={styles.container2}>
                <ScrollView>
                    <Text style={[styles.subtitle, { marginTop: 25 }]}>{Strings.Vietnamese.signUp.email}</Text>
                    <LoginInput 
                    inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.email) : (Strings.English.signUp.placeHolder.email)}
                    onChangeText={email => setEmail(email)}
                    value={email}
                    secureText={false}
                    reveal={false}
                    />

                    <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.fullname) : (Strings.English.signUp.fullname)}</Text>
                    <LoginInput 
                    inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.fullname) : (Strings.English.signUp.placeHolder.fullname)}
                    onChangeText={name => setName(name)}
                    value={name}
                    secureText={false}
                    reveal={false}
                    />

                    <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.username) : (Strings.English.signUp.username)}</Text>
                    <LoginInput 
                    inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.username) : (Strings.English.signUp.placeHolder.username)}
                    onChangeText={username => setUsername(username)}
                    value={username}
                    secureText={false}
                    reveal={false}
                    />

                    <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.serialCode) : (Strings.English.signUp.serialCode)}</Text>
                    <LoginInput 
                    inputText={(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.placeHolder.serialNo) : (Strings.English.signUp.placeHolder.serialNo)}
                    onChangeText={cardno => setCardno(cardno)}
                    value={cardno}
                    secureText={false}
                    reveal={false}
                    />

                    <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.signUp.password) : (Strings.English.signUp.password)}</Text>
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
                </ScrollView>
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
        alignItems: 'center'
    },
    container2: {
        flex: 4,
        paddingHorizontal: 45
    },
    screenTitle: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: Color.color_black,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        color: Color.color_black,
        marginBottom: 10
    },

    textContainer: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        color: Color.color_black
    },
    clickableText: {
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        color: Color.text_pressable,
        marginLeft: 10
    }
});

export default SignupScreen;