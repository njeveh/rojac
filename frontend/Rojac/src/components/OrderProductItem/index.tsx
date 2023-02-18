import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';

const OrderProductItem = ({item}) => {
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.quantity}>
            Quantity: 5
          </Text>
          <Text style={styles.price}>
            @ Kshs. {item.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderProductItem;
