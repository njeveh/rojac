import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const OrderListItem = () => {
  const navigation = useNavigation();

  const onPress = ({item}) => {
    navigation.navigate('Order Details', {item: item});
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onPress} style={styles.main}>
        <View>
          <Text>
            Order Ref: 1
          </Text>
          <Text>
            Placed on: 13/10/2022
          </Text>
          <Text>
            Transaction Status: open
          </Text>
          <Text>
            Delivery Status: pending
          </Text>
          <Text>
            Delivered on: 13/10/2022
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default OrderListItem;
