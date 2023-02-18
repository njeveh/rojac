import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}: {title: string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const HomeScreen = (/*{searchValue}: {searchValue: string}*/) => {
  // const [products, setProducts] = useState([]);
  const renderItem = ({item}) => <Item title={item.title} />;

  // useEffect(() => {
  //   // ComponentDidMount
  //   console.log('useEffect');
  //   getProductsList('products');
  // }, []);

  // function getProductsList(url: string) {
  //   let fetch_url = url;
  //   return fetch(`http://10.0.2.2:8000/rojac/${fetch_url}`, {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // console.log(json, "json");
  //       setProducts(json);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  return (
    <View style={styles.page}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
