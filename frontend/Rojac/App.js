import 'react-native-gesture-handler';
import React from 'react'
import {SafeAreaView, View, StatusBar, useColorScheme } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useRef, useState } from 'react';
import { Provider } from "react-redux";
import store from "./src/redux/store";
// import AddProductScreen from './src/screens/AddProductScreen';
// import OrderListItem from './src/screens/BuyerOrderDashboard/main';
// import OrderDetailsScreen from './src/screens/BuyerOrderDashboard/OrderDetailsScreen';


const App = () => {
  const navigationRef = useNavigationContainerRef();
  const nav = () => navigationRef.current
  const routeNameRef = useRef();
  const routeHeaderRef = useRef();
  const isDarkMode = useColorScheme() === 'dark';
  const [screenHeaderTitle, setScreenHeaderTitle] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <OrderDetailsScreen /> */}
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.getCurrentRoute().name;
            routeHeaderRef.current = navigationRef.getCurrentOptions().title;
            setScreenHeaderTitle(routeHeaderRef.current);
          }}
          onStateChange={async () => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName = navigationRef.getCurrentRoute().name;
            const currentRouteHeader = navigationRef.getCurrentOptions().title;

            // Save the current route name for later comparison
            routeNameRef.current = currentRouteName;
            routeHeaderRef.current = currentRouteHeader;
            setScreenHeaderTitle(routeHeaderRef.current);
            // console.log(routeNameRef.current);
            // console.log(routeHeaderRef.current)
        }}
        
        >
          <Router nav={nav} screenHeaderTitle={routeHeaderRef.current} />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
