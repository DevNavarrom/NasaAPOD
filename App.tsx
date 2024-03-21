/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import Home from './src/views/Home';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerAndroid}>
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#071A5D',
    flex: 1,
  },
  containerAndroid: {
    flex: 1, 
    paddingTop: Platform.OS === 'android' ? 50 : 0
  }
});

export default App;
