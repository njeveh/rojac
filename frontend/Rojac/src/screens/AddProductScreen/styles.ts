import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
    // paddingVertical: 20,
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    color: "maroon"
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
  },
  errorLabel: {
    color: 'red',
  },
});

export default styles;
