import React from 'react';
import {View, StyleSheet, FlatList, Text, Alert} from 'react-native';
import OrderProductItem from '../../components/OrderProductItem';
import Button from '../../components/CustomButton';
import products from '../../data/products';

const BuyerOrderDetailsScreen = () => {
  const message1 = "This order has been closed after successful delivery. If you have any enquries or complains\
                    about it please contact us via 2547XXXXXXXX or rojac@gmail.com . Thank you for shopping with us."
  const message2 = "This order has been rejected due to the following reasons:\n\nIf you have any enquries or complains\
                    about it please contact us via 2547XXXXXXXX or rojac@gmail.com . Thank you for shopping with us."

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
                  <Text
                    style={{
                      backgroundColor: '#fae6af', //'#c7b702',
                      padding: 5,
                      borderRadius: 10,
                      borderColor: '#fc2c03',
                      borderWidth: 1,
                    }} >
                      {message2}
                  </Text>
              </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                  <Text style={{ fontWeight: "bold", fontSize: 25, }}>
                    Order Items
                  </Text>
                </View>
              </View>
          </View>
        )}
      />
      </View>
  );

};

export default BuyerOrderDetailsScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  footer: {
    justifyContent: "space-between",
  },
});
