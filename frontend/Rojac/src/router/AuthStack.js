import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="SignIn"
    >
      <Stack.Screen
        component={SignInScreen}
        name="Sign In"
        options={{title: 'Sign In', headerTitle: 'Sign In'}}
      />
      <Stack.Screen
        component={SignupScreen}
        name="Sign Up"
        options={{title: 'Sign Up', headerTitle: 'Sign Up'}}
      />
      <Stack.Screen
        component={ForgotPasswordScreen}
        name="Reset Password"
        options={{title: 'Reset Password', headerTitle: 'Reset Password'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
