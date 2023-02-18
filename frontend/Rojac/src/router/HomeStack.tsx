import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import {Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import SearchBar from "../components/SearchBar";

const Stack = createStackNavigator();
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'All',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Bones & Joints',
  },
  {
    id: '58694a0f-0da1-471f-cd96-145571e29d72',
    title: 'Digestive',
  },
  {
    id: '51004a0f-3xa1-471f-yz96-145571e29d73',
    title: 'Cardiovascular',
  },
  {
    id: '2893a0f-3dr3-471f-xv96-145571e29d74',
    title: 'Imune Booster',
  },
  {
    id: '78904a0f-3ert-471f-jn96-145571e29d75',
    title: 'Men Health',
  },
  {
    id: '22764a0f-3de5-471f-pl96-145571e29d76',
    title: 'Beauty and Longevity',
  },
  {
    id: '44494a0f-30pr-471f-om96-145571e29d77',
    title: 'Suma Living',
  },
];
const CategoryButton = ({ setCategory, title }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      setCategory(title);
    }}
    style={styles.item}
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
interface HeaderComponentProps {
  searchPhrase: string;
  setSearchPhrase: () => void;
  category: string;
  setCategory: () => void;
  clicked: boolean
  setClicked: () => void;
  submitQuery: boolean;
  setSubmitQuery: () => void;
}

const HeaderComponent = ({
  searchPhrase,
  setSearchPhrase,
  setCategory,
  clicked,
  setClicked,
  setSubmitQuery,
}: HeaderComponentProps) => {
  const renderItem = ({ item }) => {
    return (
      <CategoryButton setCategory={setCategory} title={item.title} />
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        setSubmitQuery={setSubmitQuery}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [category, setCategory] = useState('');
  const [clicked, setClicked] = useState(false);
  const [submitQuery, setSubmitQuery] = useState(false);
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            category={category}
            setCategory={setCategory}
            clicked={clicked}
            setClicked={setClicked}
            submitQuery={submitQuery}
            setSubmitQuery={setSubmitQuery}
          />
        ),
      }}>
      <Stack.Screen name="Home Screen" options={{title: 'Home', headerTitle: 'Home'}}>
        {() => <HomeScreen
        searchPhrase={searchPhrase}
        category={category}
        submitQuery={submitQuery}
        setSubmitQuery={setSubmitQuery}/>}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="Product Details"
              options={{title: 'Home', headerTitle: 'Product Details'}}
       />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  // },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 5,
    borderRadius: 20,
    minWidth: 60,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
  },

});