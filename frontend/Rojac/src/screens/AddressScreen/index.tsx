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
import countryList from 'country-list';
import Button from '../../components/CustomButton';
import styles from './styles';
import COUNTIES_DATA from '../../data/Counties';
import PickupPoints from '../../data/PickupLocations';

const countries = countryList.getData();

const AddressScreen = () => {
  let cities = [];
  COUNTIES_DATA.map(county => {
    cities.push(county.capital)
  })
  const [country, setCountry] = useState(countries[114].code);
  const [county, setCounty] = useState(COUNTIES_DATA[17]);
  const [subCounty, setSubCounty] = useState(county.subCounties[0]);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  let point = PickupPoints.find(point => point.subCounty === subCounty);
  let points = typeof point !== "undefined"? point.pickupPoints : null;
  const [subCountyPickupPoints, setSubCountyPickupPoints] = useState( points? points : cities);
  const [pickupPoint, setPickupPoint] = useState(points? subCountyPickupPoints[0]: county.capital);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState(county.capital);
  useEffect(()=>{
    setCity(county.capital);
  },[county]);

  console.log(fullname);

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('Fix all field errors before submiting');
      return;
    }

    if (!fullname) {
      Alert.alert('Please fill in the fullname field');
      return;
    }

    if (!phone) {
      Alert.alert('Please fill in the phone number field');
      return;
    }

    console.warn('Success. Checkout');
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>

        {/* Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/* Phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Country</Text>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(country => (
              <Picker.Item value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>County</Text>
          <Picker selectedValue={county} onValueChange={setCounty}>
            {COUNTIES_DATA.map(county => (
              <Picker.Item value={county} label={county.name} />
            ))}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Sub County</Text>
          <Picker selectedValue={subCounty} onValueChange={setSubCounty}>
            {county.subCounties.map(sub_county => (
              <Picker.Item value={sub_county} label={sub_county} />
            ))}
          </Picker>
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City/Town</Text>
          <TextInput
            style={styles.input}
            placeholder="City/Town"
            value={city}
            onChangeText={setCity}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Select a pickup location</Text>
          <Picker selectedValue={pickupPoint} onValueChange={setPickupPoint}>
            {subCountyPickupPoints.map(point => (
              <Picker.Item value={point} label={point} />
            ))}
          </Picker>
        </View>

        <Button
        containerStyles={{ 
          marginBottom: 50,
          backgroundColor: '#4bb807',
          borderColor: '#c7b702',
        }}
        text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
