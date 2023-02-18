import React, {useState} from 'react';
import {View, Text, Pressable, FlatList, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import OrderListItem from '../../components/OrderListItem';
import products from '../../data/products';

const adminOrderFilters = [
  {
    id: '51004a0f-3xa1-471f-yz96-145571e29d73',
    title: 'All',
  },
  {
    id: '2893a0f-3dr3-471f-xv96-145571e29d74',
    title: 'Pending Approval',
  },
  {
    id: '78904a0f-3ert-471f-jn96-145571e29d75',
    title: 'Pending Delivery',
  },
  {
    id: '22764a0f-3de5-471f-pl96-145571e29d76',
    title: 'Delivered',
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
const AdminOrderListScreen = () => {
  const [orders, setOrders] = useState(products);
  const [orderFilter, setOrderFilter] = useState('All');
  const [filteredOrders, setFilteredOrders] = useState(products);
  return (
    <View style={styles.root}>
      <FlatList
        data={adminOrderFilters}
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

export default AdminOrderListScreen;
