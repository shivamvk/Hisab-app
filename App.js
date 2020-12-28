import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppContainer from './src/navigation/AppNavigator';
import NavigationService from './src/navigation/NavigationService';

const App = () => {
  return (
    <>
      <AppContainer
        // uriPrefix={"https://hisabapp.shivamvk.io"}
        ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef)
        }}/>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
