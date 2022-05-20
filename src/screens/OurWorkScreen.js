import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Header from '../components/HomeCom/Header';
import Phone from '../components/WorkCom/Phone';

export const OurWorkScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={{...styles.text, fontSize: 25, marginTop: 10}}>
        Our Work
      </Text>
      <Text
        style={{
          ...styles.text,
          fontSize: 18,
          color: Colors.accent,
          marginTop: 5,
        }}>
        Browse through our award-winning mobile experiences
      </Text>
      <Phone />
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
