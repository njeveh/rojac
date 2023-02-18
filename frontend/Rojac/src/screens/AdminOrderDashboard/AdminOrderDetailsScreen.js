import React from 'react';
import {View, StyleSheet, FlatList, Text, Alert} from 'react-native';
import OrderProductItem from '../../components/OrderProductItem';
import Button from '../../components/CustomButton';
import products from '../../data/products';

const AdminOrderDetailsScreen = () => {

//     const AlertItem = () => {
//       Alert.alert(
//         "Are you sure you want to clear the cart? All items will be discarded.",
//         "",
//         [
//           {
//             text: "Cancel",
//             onPress: () => console.log("Cancel Pressed"),
//             style: "cancel",
//           },
//           { text: "OK", onPress: () => dispatch(clear()) },
//         ],
//         { cancelable: false }
//       );
//     };

//   const onCheckout = () => {
//     navigation.navigate('Address');
//   };

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <OrderProductItem item={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
              <View>
                <View
                style={{
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ fontSize: 18 }}>
                  Order Ref: xxxxxxxxxxxxx
                </Text>
                <Text style={{ fontSize: 18 }}>
                  Payment Ref: xxxxxxxxxxxxx
                </Text>
                  <Text style={{ color: '#e47911', fontWeight: 'bold' }}>
                   Total Amount Paid: Kshs. 24000
                  </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 5,
                }}
              >
                  <Button
                    onPress={null}
                    text="This order has been closed after successful delivery. If it isn't the case you may click here to reopen it for processing."
                    containerStyles={{
                      backgroundColor: '#fae6af',
                      borderColor: '#fc2c03',
                      flex: 4,
                      marginRight: 5,
                      height: 70,
                    }} />
                  {/* <Button
                    onPress={null}
                    text="This order has been closed due to rejection or cancellation. click here to open it again for processing."
                    containerStyles={{
                      backgroundColor: '#c7b702',
                      borderColor: '#fc2c03',
                      flex: 4,
                      marginRight: 5,
                      height: 70,
                    }} /> */}
                  {/* <Button
                    onPress={null}
                    text="Reject Order"
                    containerStyles={{
                      backgroundColor: '#fc2c03',
                      borderColor: '#c7b702',
                      flex: 4,
                      marginRight: 5,
                      height: 50,
                    }} /> */}
                  {/* <Button
                    onPress={null}
                    text="Cancel Order"
                    containerStyles={{
                      backgroundColor: '#fc2c03',
                      borderColor: '#c7b702',
                      flex: 4,
                      marginRight: 5,
                      height: 50,
                    }} /> */}
                  {/* <Button
                    text="Accept For Processing"
                    onPress={null}
                    containerStyles={{
                      backgroundColor: '#4bb807',
                      borderColor: '#c7b702',
                      flex: 6,
                      marginLeft: 5,
                      height: 50,
                    }} /> */}
                  {/* <Button
                    text="Mark as delivered"
                    onPress={null}
                    containerStyles={{
                      backgroundColor: '#e47911',
                      borderColor: '#c7b702',
                      flex: 6,
                      marginLeft: 5,
                      height: 50,
                    }} /> */}
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                  <Text style={{ fontWeight: "bold", fontSize: 25, }}>
                    Order Items
                  </Text>
                </View>
              </View>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View style={styles.footer}>
              <View style={styles.actionButtonsWrapper}>
                  <View style={styles.checkoutFull}>
                    <Button
                      text="Reject Order"
                      onPress={() => {
                        // dispatch(checkout());
                      }}
                      containerStyles={{
                      backgroundColor: '#fc2c03',
                      borderColor: '#c7b702',
                      }}
                    />
                    <Button
                      text="Cancel Order"
                      onPress={() => {
                        // dispatch(checkout());
                      }}
                      containerStyles={{
                      backgroundColor: '#fc2c03',
                      borderColor: '#c7b702',
                      }}
                    />
                    <Button
                      text="Accept order for processing"
                      onPress={null}
                      containerStyles={{
                      backgroundColor: '#4bb807',
                      borderColor: '#c7b702',
                      }}
                    />
                  <Button
                    text="Mark as delivered"
                    onPress={null}
                    containerStyles={{
                      backgroundColor: '#e47911',
                      borderColor: '#c7b702',
                    }} />
                  </View>
              </View>
              <View style={{ height: 200 }} />
            </View>
          );
        }}
      />
      </View>
  );

};

export default AdminOrderDetailsScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  footer: {
    justifyContent: "space-between",
  },
});
