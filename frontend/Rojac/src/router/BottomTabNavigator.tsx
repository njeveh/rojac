import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
// import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import { routes, screens } from './routeItems'
import { Text, View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

// const tabOptions = ({ route }) => {
//   const item = routes.find(routeItem => routeItem.name === route.name) // get the route config object

//   if (!item.showInTab) { // hide this tab
//     return {
//       tabBarButton: () => <View style={{ width: 0 }} />,
//       headerShown: false,
//       tabBarStyle: styles.tabContainer,
//       title: item.title,
//     }
//   }

//   return {
//     tabBarIcon: item.icon,
    // tabBarLabel: () => (
    //   <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    // ),
    // headerShown: false,
    // tabBarStyle: styles.tabContainer,
//     headerTitle: item.title,
//     tabBarInactiveTintColor: '#ffbd7d',
//     tabBarActiveTintColor: '#e47911',
//     tabBarHideOnKeyboard: true,
//   }
// }
// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={tabOptions}>
//       <Tab.Screen name={screens.HomeStack} component={HomeStack} />
//       <Tab.Screen name={screens.Profile} component={HomeScreen}
//               options={{title: 'Profile', headerTitle: 'Profile'}}
//       />
//       <Tab.Screen name={screens.ShoppingCartStack} component={ShoppingCartStack} />
//     </Tab.Navigator>
//   );
// };
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#ffbd7d',
        tabBarActiveTintColor: '#e47911',
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabContainer,
        }}
        >
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name="Shopping Cart"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="About"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="help-with-circle" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  }
})

export default BottomTabNavigator;
