import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// React Navigation v5
import { createStackNavigator } from '@react-navigation/stack';

// Screens Import
import LoginScreen from '../screens/login-screen/loginScreen';
import SignupScreen from '../screens/signup-screen/signupScreen';
import ResetPwdScreen from '../screens/reset-pwd-screen/resetPwdScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
            >
                <Stack.Screen 
                name='Login'
                component={LoginScreen}
                />

                <Stack.Screen 
                name='Signup'
                component={SignupScreen}
                />

                <Stack.Screen 
                name='ResetPwd'
                component={ResetPwdScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;