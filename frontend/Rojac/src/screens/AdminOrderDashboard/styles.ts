import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    // flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: '#d1d1d1',
    // borderRadius: 10,
    backgroundColor: '#cebfdb',
    // margin: 15,
        height: '100%',
  },
  emptyOrdersText : {
    backgroundColor: '#fff',
    color: '#000000',
    fontSize: 25,
    borderRadius: 5,
    padding: 10

  },
  emptyOrdersView : {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 20,
    minWidth: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  title: {
    fontSize: 15,
  },
 
});

export default styles;
