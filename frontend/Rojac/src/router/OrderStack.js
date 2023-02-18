import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BuyerOrderListScreen from '../screens/BuyerOrderDashboard/BuyerOrderListScreen';
import BuyerOrderDetailsScreen from '../screens/BuyerOrderDashboard/BuyerOrderDetailsScreen';
import AdminOrderDetailsScreen from '../screens/AdminOrderDashboard/AdminOrderDetailsScreen';
import AdminOrderListScreen from '../screens/AdminOrderDashboard/AdminOrderListScreen';

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        component={BuyerOrderListScreen}
        name="Orders List"
        options={{title: 'Orders', headerTitle: 'Orders'}}
      />
      <Stack.Screen
        component={BuyerOrderDetailsScreen}
        name="Order Details"
        options={{title: 'Orders', headerTitle: 'Order Details'}}
      /> */}
      <Stack.Screen
        component={AdminOrderListScreen}
        name="Orders List"
        options={{title: 'Orders', headerTitle: 'Orders'}}
      />
      <Stack.Screen
        component={AdminOrderDetailsScreen}
        name="Order Details"
        options={{title: 'Orders', headerTitle: 'Order Details'}}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
