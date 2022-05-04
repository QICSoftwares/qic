import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Header from '../components/HomeCom/Header';
import Colors from '../constants/Colors';

StatusBar.setBackgroundColor(Colors.bag1Bg);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bag1Bg,
  },
});

export default HomeScreen;
