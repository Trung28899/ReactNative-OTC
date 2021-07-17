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
// import { validateEmail } from '../../services/authValidator/validator';

// Components Import
import { AuthLanguageDropdown } from '../../components/authLanguageDropdown';
import { LoginInput } from '../login-screen/components/loginInput';
import { LoginButton } from '../login-screen/components/loginButton';

const ResetPwdScreen = (props) => {
    const [email, setEmail] = React.useState('');

    const language = useSelector(state => state.app.language);

    const handleResetPassword = () => {
        
    }

    return (
        <View style={styles.screen}>
            <AuthLanguageDropdown />
            <View style={styles.container1}>
                <Text style={styles.screenTitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.retrieve.title) : (Strings.English.retrieve.title)}</Text>
                <Text style={styles.subtitle}>{(language.name === Constants.VN) ? (Strings.Vietnamese.retrieve.explain) : (Strings.English.retrieve.explain)}</Text>
            </View>

            <View style={styles.container2}>
                <Text style={styles.subtitle2}>{Strings.Vietnamese.retrieve.email}</Text>
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
                        <Text style={styles.subtitle3}>{(language.name === Constants.VN) ? (Strings.Vietnamese.retrieve.signin) : (Strings.English.retrieve.signin)}</Text>
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
        paddingBottom: 40,
        paddingHorizontal: 25
    },
    container2: {
        flex: 2.5,
        paddingHorizontal: 45
    },
    screenTitle: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: Color.color_black,
        marginBottom: 10
    },
    subtitle: {
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        color: Color.color_black,
        textAlign: 'center'
    },
    subtitle2: {
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        color: Color.color_black,
        marginBottom: 10
    },
    clickContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle3: {
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        color: Color.text_pressable,
        marginTop: 15
    }
});

export default ResetPwdScreen;