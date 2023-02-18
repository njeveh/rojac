import React, {useState} from 'react';
import {View, Text, Pressable, FlatList, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import OrderListItem from '../../components/OrderListItem';
import products from '../../data/products';
const buyerOrderFilters = [
  {
    id: '7dc86cfa-7r03-20r4-d4t5-dfb61cz97g72',
    title: 'All',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'undelivered',
  },
  {
    id: '58694a0f-0da1-471f-cd96-145571e29d72',
    title: 'delivered',
  },
];

const OrderFilterButton = ({ setOrderFilter, filter }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      setOrderFilter(filter);
    }}
    style={styles.item}
  >
    <Text style={styles.title}>{filter}</Text>
  </TouchableOpacity>
);
const BuyerOrderListScreen = () => {
  const [orders, setOrders] = useState(products);
  const [orderFilter, setOrderFilter] = useState('All');
  const [filteredOrders, setFilteredOrders] = useState(products);
  return (
    <View style={styles.root}>
      <FlatList
        data={buyerOrderFilters}
        renderItem={({item}) => <OrderFilterButton setOrderFilter={setOrderFilter} filter={item.title} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      <FlatList
        data={filteredOrders}
        renderItem={({item}) => <OrderListItem item={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            {filteredOrders == null ? (
                <View style={styles.emptyOrdersView}>
                  <Text style={styles.emptyOrdersText}>No orders to show</Text>
                </View>
              ) : (
                ""
            )}
          </View>
        )}
      />
    </View>
  );
};

export default BuyerOrderListScreen;
