import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo';

export const screens = {
    HomeStack: 'Home',
    Profile: 'Profile',
    ShoppingCartStack: 'Shopping Cart',
    OrderStack: 'Orders'
}

export const routes = [
//   {
//     name: screens.HomeTab,
//     focusedRoute: screens.HomeTab,
//     title: 'Home',
//     showInTab: false,
//     showInDrawer: false,
//     icon: (focused) =>
//       <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
//   },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: ({color}) => (
        <Entypo name="home" color={color} size={25} />),
  },

  {
    name: screens.Profile,
    focusedRoute: screens.HomeStack,
    title: 'Profile',
    showInTab: true,
    showInDrawer: false,
    icon: ({color}) => (
            <Entypo name="user" color={color} size={25} />
          ),
  },

  {
    name: screens.ShoppingCartStack,
    focusedRoute: screens.ShoppingCartStack,
    title: 'Shopping Cart',
    showInTab: true,
    showInDrawer: false,
    icon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
  },

  {
    name: screens.OrderStack,
    focusedRoute: screens.OrderStack,
    title: 'Orders',
    showInTab: true,
    showInDrawer: true,
    icon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
  },

  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.MyRewardsStack,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="star" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.MyRewards,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="star" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.LocationsStack,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Locations,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
]