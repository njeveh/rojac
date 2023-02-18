import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from "expo-image-picker";
import Button from '../../components/CustomButton';
import styles from './styles';
import Thumbnail from '../../components/Thumbnail';

const categories = [
  {
    id: '7dc86cfa-7r03-20r4-d4t5-dfb61cz97g72',
    name: 'others',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'bones and joints',
  },
  {
    id: '58694a0f-0da1-471f-cd96-145571e29d72',
    name: 'digestive',
  },
  {
    id: '51004a0f-3xa1-471f-yz96-145571e29d73',
    name: 'cardiovascular',
  },
  {
    id: '2893a0f-3dr3-471f-xv96-145571e29d74',
    name: 'imune booster',
  },
  {
    id: '78904a0f-3ert-471f-jn96-145571e29d75',
    name: 'men health',
  },
  {
    id: '22764a0f-3de5-471f-pl96-145571e29d76',
    name: 'beauty and longevity',
  },
  {
    id: '44494a0f-30pr-471f-om96-145571e29d77',
    name: 'suma living',
  },
];
// const createFormData = (photo, body = {}) => {
//   const data = new FormData();

//   data.append('photo', {
//     name: photo.fileName,
//     type: photo.type,
//     uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
//   });

//   Object.keys(body).forEach((key) => {
//     data.append(key, body[key]);
//   });

//   return data;
// };
const AddProductScreen = () => {
  const [productCategory, setProductCategory] = useState('others');
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0.00);
  const [pricingUnit, setPricingUnit] = useState('');
  const [stockNumber, setStockNumber] = useState(0);
  const [mainImage, setMainImage] = useState(null);
  const [extraImage1, setExtraImage1] = useState(null);
  const [extraImage2, setExtraImage2] = useState(null);
  const [extraImage3, setExtraImage3] = useState(null);

  useEffect(() => {
    if (extraImage1 == null && extraImage2){
      setExtraImage1(extraImage2);
      setExtraImage2(null);
    }
  }, [extraImage1]);

  useEffect(() => {
    if (extraImage2 == null && extraImage3){
      setExtraImage2(extraImage3);
      setExtraImage3(null);
    }
  }, [extraImage2]);

  //commodity_name, catgory, price, pricing_unit, number_in_stock, commodity_main_image
  // commodity_extra_image1, commodity_extra_image2

  //   const [mainImage, setPrice] = useState(0.00);
  // const [pricingUnit, setPricingUnit] = useState('');

  // const [stockNumber, setStockNumber] = useState(0);

  // console.log(fullname);

  // const onCheckout = () => {
  //   if (addressError) {
  //     Alert.alert('Fix all field errors before submiting');
  //     return;
  //   }

  //   if (!fullname) {
  //     Alert.alert('Please fill in the fullname field');
  //     return;
  //   }

  //   if (!phone) {
  //     Alert.alert('Please fill in the phone number field');
  //     return;
  //   }

  //   console.warn('Success. CHeckout');
  // };

  // const validateAddress = () => {
  //   if (address.length < 3) {
  //     setAddressError('Address is too short');
  //   }
  // };

  const handleChoosePhoto = async (action) => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (pickerResult.cancelled === true) return;
    action(pickerResult);
  };

  // const handleUpload = () => {
  //   fetch(`${SERVER_URL}/api/upload`, {
  //     method: 'POST',
  //     body: createFormData(photo, { userId: '123' }),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log('response', response);
  //     })
  //     .catch((error) => {
  //       console.log('error', error);
  //     });
  // };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Text style={styles.label}>Select Product Category</Text>
          <Picker selectedValue={productCategory} onValueChange={setProductCategory}>
            {categories.map(category => (
              <Picker.Item value={category.name} label={category.name} />
            ))}
          </Picker>
        </View>

        {/* Product Title */}
        <View style={styles.row}>
          <Text style={styles.label}>Product Title</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={10}
            textAlignVertical="top"
            placeholder="Enter pruduct title here"
            value={productTitle}
            onChangeText={setProductTitle}
          />
        </View>

        {/* Product Description */}
        <View style={styles.row}>
          <Text style={styles.label}>Product Description</Text>
          <TextInput
            style={styles.textInput}
            textAlignVertical="top"
            multiline={true}
            numberOfLines={30}
            placeholder="Enter the product description here in the format you would like it to appear on display"
            value={productDescription}
            onChangeText={setProductDescription} 
          />
        </View>

        {/* Product Price */}
        <View style={styles.row}>
          <Text style={styles.label}>Product Price (in Kshs)</Text>
          <TextInput
            style={styles.input}
            placeholder="price in Kshs"
            value={productPrice}
            // onEndEditing={validateAddress}
            onChangeText={setProductPrice}
            // onChangeText={text => {
            //   setAddress(text);
            //   setAddressError('');
            // }}
            keyboardType="numeric"
          />
          {/* {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )} */}
        </View>

        {/* Pricing Unit */}
        <View style={styles.row}>
          <Text style={styles.label}>Pricing Unit (e.g. 1kg, 5gm, 1 sachet, a packet of 6 e.t.c.)</Text>
          <TextInput
            style={styles.input}
            placeholder="1 dozen"
            value={pricingUnit}
            onChangeText={setPricingUnit}
          />
        </View>

        {/* Quantity in stock */}
        <View style={styles.row}>
          <Text style={styles.label}>Quantity in stock</Text>
          <TextInput
            style={styles.input}
            placeholder="1"
            value={productPrice}
            // onEndEditing={validateAddress}
            onChangeText={setProductPrice}
            // onChangeText={text => {
            //   setAddress(text);
            //   setAddressError('');
            // }}
            keyboardType="numeric"
          />
          {/* {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )} */}
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button text="Select Main Image" onPress={() => {handleChoosePhoto(setMainImage)}} />
          {mainImage && (
            <>
              <Thumbnail uri={mainImage.uri} title="Main Image" action={setMainImage} />
            </>
          )}
        </View>
        {mainImage && (
          <>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button text="Select Extra Image 1" onPress={() => {handleChoosePhoto(setExtraImage1)}} />
            {extraImage1 && (
              <>
                <Thumbnail uri={extraImage1.uri} title="Extra Image 1" action={setExtraImage1}/>
              </>
            )}
          </View>
          </>
        )}
        {extraImage1 && (
          <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button text="Select Extra Image 2" onPress={() => {handleChoosePhoto(setExtraImage2)}} />
              {extraImage2 && (
                <>
                  <Thumbnail uri={extraImage2.uri} title="Extra Image 2" action={setExtraImage2} />
                </>
              )}
            </View>
          </>
          )}
          {extraImage2 && (
            <>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button text="Select Extra Image 3" onPress={() => {handleChoosePhoto(setExtraImage3)}} />
                {extraImage3 && (
                  <>
                    <Thumbnail uri={extraImage3.uri} title="Extra Image 3" action={setExtraImage3} />
                  </>
                )}
              </View>
            </>
          )}
        <Button text="Submit" onPress={null} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddProductScreen;
