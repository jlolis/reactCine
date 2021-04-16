import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './footer';
import Header from './header';
import Body from './body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
