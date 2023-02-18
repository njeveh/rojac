import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopingCartScreen from '../screens/ShopingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShopingCartScreen}
        name="Cart"
        options={{title: 'Shopping Cart', headerTitle: 'Shopping Cart'}}
      />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Shopping Cart', headerTitle: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
