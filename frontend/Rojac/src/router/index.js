import React from 'react'
// import {createStackNavigator} from '@react-navigation/stack';
// import BottomTabNav from './bottomTabNav';
import DrawerNavigator from './DrawerNavigator';


// const Root = createStackNavigator();

const Router = ({nav, screenHeaderTitle}) => {
  return (
      <DrawerNavigator nav={nav} screenHeaderTitle={screenHeaderTitle} />
  );
};

export default Router;
