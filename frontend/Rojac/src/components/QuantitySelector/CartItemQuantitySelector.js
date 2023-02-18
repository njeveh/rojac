import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  removeItem,
} from "../../redux/features/cart/cartSlice";


const CartItemQuantitySelector = ({item}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <View style={styles.root}>
      <Pressable
        onPress={() => {
          if (item.quantity === 1) {
            dispatch(removeItem(item.id));

            console.log("removed");
            return;
          } else {
            dispatch(decrement(item.id));
          }
        }}
        style={styles.button}>
        <Text style={styles.butonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{item.quantity}</Text>

      <Pressable
        onPress={() => {
          console.log(item.quantity);
          dispatch(increment(item.id));
        }}
        style={styles.button}>
          <Text style={styles.butonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 130,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
  },
  butonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
  },
});

export default CartItemQuantitySelector;
