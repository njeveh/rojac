import React from 'react';
import {View, StyleSheet, FlatList, Text, Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/CustomButton';
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../redux/features/cart/cartSlice";
import { cartTotalPriceSelector } from "../../redux/selectors";

const ShopingCartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const goHome = () => {
    navigation.navigate('Home');
  };

    const AlertItem = () => {
      Alert.alert(
        "Are you sure you want to clear the cart? All items will be discarded.",
        "",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => dispatch(clear()) },
        ],
        { cancelable: false }
      );
    };

  const onCheckout = () => {
    navigation.navigate('Address');
  };

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={cart}
        renderItem={({item}) => <CartProductItem item={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            {cart.length === 0 ? (
                <View style={styles.emptyCartView}>
                  <Text style={styles.emptyCartText}>Your cart is empty</Text>
                </View>
              ) : (
              <View>
                <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ fontSize: 18 }}>
                  Subtotal ({cart.length} items):{' '}
                  <Text style={{ color: '#e47911', fontWeight: 'bold' }}>
                    Kshs.{totalPrice.toFixed(2)}
                  </Text>
                </Text>
              </View><View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 5,
                }}
              >
                  <Button
                    onPress={AlertItem}
                    text="Clear Cart"
                    containerStyles={{
                      backgroundColor: '#fc2c03',
                      borderColor: '#c7b702',
                      flex: 3,
                      marginRight: 5
                    }} />
                  <Button
                    text="Proceed to checkout"
                    onPress={onCheckout}
                    containerStyles={{
                      backgroundColor: '#4bb807',
                      borderColor: '#c7b702',
                      flex: 6,
                      marginLeft: 5
                    }} />
                </View>
              </View>
            )}
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View style={styles.cartFooter}>
              <View style={styles.checkout}>
                {cart.length === 0 ? "": (
                  <View style={styles.checkoutFull}>
                    <Text style={styles.checkoutText}>
                      Total: Kshs. {totalPrice.toFixed(2)}
                    </Text>

                    <Button
                      text="Proceed to checkout"
                      onPress={() => {
                        // dispatch(checkout());
                        onCheckout();
                      }}
                      containerStyles={{
                        backgroundColor: '#4bb807',
                        borderColor: '#c7b702',
                      }}
                    />
                    <Button
                      text="Continue Shopping"
                      onPress={() => goHome()}
                      containerStyles={{
                        backgroundColor: '#e47911',
                        borderColor: '#c7b702',
                      }}
                    />
                  </View>
                )}
              </View>
              <View style={{ height: 200 }} />
            </View>
          );
        }}
      />
      </View>
  );

};

export default ShopingCartScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },

  emptyCartText : {
    backgroundColor: '#e47911',
    color: '#000000',
    fontSize: 25,
    borderRadius: 5,
    padding: 10

  },
  emptyCartView : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

  },
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
  },
  storeItemImg: {
    width: "30%",
    height: 100,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
  },
  addToCart: {
    backgroundColor: "coral",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemRemove: {
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartFooter: {
    justifyContent: "space-between",
  },
});
