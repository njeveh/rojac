import React from 'react';
import {Image, View, Text, Pressable, Alert} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import CartItemQuantitySelector from '../QuantitySelector/CartItemQuantitySelector';
import styles from './styles';
import { useDispatch } from "react-redux";
import { removeItem } from '../../redux/features/cart/cartSlice';

const CartProductItem = ({item}) => {
    const dispatch = useDispatch();
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <Text style={styles.price}>
            from ${item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.BtnWrapper}>
        <View style={styles.quantityContainer}>
          <CartItemQuantitySelector item={item} />
        </View>
        <Pressable
          onPress={() => {
              dispatch(removeItem(item.id));
            }}
          style={styles.removeBtn}>
          <Fontisto
            name={'shopping-basket-remove'}
            size={25}
            color={'#000000'}
          />
          <Text style={styles.text}> Remove</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartProductItem;
