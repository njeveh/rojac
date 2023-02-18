import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo';

import BottomTabNavigator from './BottomTabNavigator'
import OrderStack from './OrderStack';
import AuthStack from './AuthStack';
import { routes, screens } from './routeItems'
import ModalDropdown from 'react-native-modal-dropdown';
import Button from '../components/CustomButton';

const Drawer = createDrawerNavigator()

// const CustomDrawerContent = (props) => {
//   const currentRouteName = props.nav()?.getCurrentRoute()?.name
//   return (
//     <DrawerContentScrollView {...props}>
//       {
//         routes.filter(route => route.showInDrawer).map((route) => {
//           const focusedRoute = routes.find(r => r.name === currentRouteName)
//           const focused = focusedRoute ?
//             route.name === focusedRoute?.focusedRoute :
//             route.name === screens.HomeStack
//           return (
//             <DrawerItem
//               key={route.name}
//               label={() => (
//                 <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
//                   {route.title}
//                 </Text>
//               )}
//               onPress={() => props.navigation.navigate(route.name)}
//               style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
//             />
//           )
//         })
//       }
//     </DrawerContentScrollView>
//   )
// }

const DrawerNavigator = ({ nav, screenHeaderTitle}) => {
  const [screenTitle, setScreenTitle] = useState('');
   useEffect(() => {
    setScreenTitle(screenHeaderTitle);
  }, [screenHeaderTitle]);
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          height: 50,
        },
        headerTitle: screenTitle,
        headerTitleAlign: 'center',
        // drawerActiveTintColor: '#ba9490',
        drawerActiveBackgroundColor:'#e47911',
        // drawerInactiveTintColor: '#ffbd7d',
        // drawerActiveTintColor: '#e47911',

        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="bars" size={20} color="#000000" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <ModalDropdown
            options={['Profile', 'logout', 'login']}
            style={styles.headerRight}
            dropdownStyle={{
              marginTop:5,
              width: 70,
              height: "auto",
              alignItems: "center",
              justifyContent: "center"
            }}
            dropdownTextStyle={{ fontSize: 15 }}
            onSelect={(idx, value) => Alert.alert(value)}
            >
            <Entypo name="user" color="#000000" size={25} />
          </ModalDropdown>
        ),
      })}
      // drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen name="Bottom Tab" component={BottomTabNavigator} options={{
        title: 'Home',
        headerTitle: screenTitle, //() => <Image source={require('../assets/hotel_logo.jpg')} />,
      }}/>
      <Drawer.Screen name="Orders" component={OrderStack} options={{
        title: 'Orders',
        headerTitle: screenTitle, //() => <Image source={require('../assets/hotel_logo.jpg')} />,
      }}/>
      <Drawer.Screen name="Auth" component={AuthStack} options={{
        title: 'Log in / Sign up',
        headerTitle: screenTitle, //() => <Image source={require('../assets/hotel_logo.jpg')} />,
      }}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
    borderRadius: 50,
    backgroundColor: "#ebe8e4",
    padding: 10,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
})

export default DrawerNavigator;