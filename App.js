import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, AppRegistry } from 'react-native';
import Main from './Main'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        animated={true}
        backgroundColor="#000000"
        barStyle={'light-content'}
        hidden={false}
      />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
