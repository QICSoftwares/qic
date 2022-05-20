import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Header from '../components/HomeCom/Header';
import RequestForm from '../components/RequestCom/RequestForm';

export const RequestScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={{...styles.text, fontSize: 25, marginTop: 10}}>Hire Us</Text>
      <Text
        style={{
          ...styles.text,
          fontSize: 15,
          color: Colors.accent,
          marginTop: 5,
        }}>
        Get A Free Quote On The Mobile App You Are Planning To Build
      </Text>
      <View>
        <RequestForm />
      </View>
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
