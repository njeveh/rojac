import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import Button from '../../components/CustomButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordError, setPasswordError] = useState('')

  const onLogin = () => {
    // if (passwordError) {
    //   Alert.alert(`${passwordError} Please make sure your passwords match and try again.`);
    //   return;
    // }

    // if (!email) {
    //   Alert.alert('Please fill in the email field');
    //   return;
    // }

    // if (!phone) {
    //   Alert.alert('Please fill in the phone number field');
    //   return;
    // }

    console.warn('Success. Login');
  };

  // const validatePassword = () => {
  //   if (password !== confirmPassword) {
  //     setPasswordError('Passwords do not match.');
  //   }
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        {/* Email */}
        <View style={styles.row}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="example@domainname.ext"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <View style={styles.row}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          {/* {!!passwordError && (
            <Text style={styles.errorLabel}>{passwordError}</Text>
          )} */}
          </View>
        <Button text="Login" onPress={onLogin} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
