import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import {AuthContext} from '../context/authContext';
import SplashScreen from '../screens/LoadingScreen/splashScreen';

const Root = createStackNavigator();

const Router = () => {
  const {splashLoading} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        {splashLoading ? (
          <Root.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Root.Screen component={BottomTabNav} name="HomeTabs" />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
