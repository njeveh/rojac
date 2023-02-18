import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = () => {
    navigation.navigate('Product Details', {id: item.id});
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onPress} style={styles.main}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/* Ratings */}
          {/* <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${item.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{item.ratings}</Text>
          </View> */}
          <Text style={styles.price}>
            from ${item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </Pressable>
      <View style={styles.addToCartBtnWrapper}>
        <Pressable
          onPress={() => {
            let data = {...item, quantity: 1};
            dispatch(addToCart(data));
          }}
        style={styles.addToCartBtn}>
          <FontAwesome
            name={'cart-plus'}
            size={25}
            color={'#000000'}
          />
          <Text style={styles.text}> Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductItem;
