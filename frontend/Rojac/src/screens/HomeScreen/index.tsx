import React, { useEffect, useState } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products';

const HomeScreen = ({searchPhrase, category, submitQuery, setSubmitQuery}:
  {searchPhrase: string, category: string, submitQuery: boolean, setSubmitQuery: (arg0: boolean) => void}) => {
  // const [products, setProducts] = useState(null);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    console.log(searchPhrase);
  }, [searchPhrase]);
  useEffect(() => {
    console.log(category);
  }, [category]);
    useEffect(() => {
      if (submitQuery === true) {
        console.log(`searching for ${searchPhrase}`);
        setSubmitQuery(false);
      }

  }, [submitQuery]);


  // useEffect(() => {
  //   // ComponentDidMount
  //   console.log("useEffect");
  //   getProductsList();
  // }, []);

  // function getProductsList() {
  //   return fetch("http://10.0.2.2:8000/api/products/list/", {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   setFilteredProducts(responseJson);
      //   setProducts(responseJson);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
  // }

  //   const searchFilterFunction = (text) => {
  //   // Check if searched text is not blank
  //   if (text) {
  //     // Inserted text is not blank
  //     // Filter the masterDataSource
  //     // Update FilteredDataSource
  //     const newData = masterDataSource.filter(function (item) {
  //       const itemData = item.title
  //         ? item.title.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredDataSource(newData);
  //     setSearch(text);
  //   } else {
  //     // Inserted text is blank
  //     // Update FilteredDataSource with masterDataSource
  //     setFilteredDataSource(masterDataSource);
  //     setSearch(text);
  //   }
  // };
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
      {/* <FlatList
          data={filteredProducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
