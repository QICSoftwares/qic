import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Header from '../components/HomeCom/Header';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={{...styles.text, fontSize: 25, marginTop: 10}}>
        About Us
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bag1Bg,
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: 'MavenPro-Bold',
    color: Colors.white,
  },
});
