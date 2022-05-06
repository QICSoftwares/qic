import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const OurWorkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OurWorkScreen</Text>
    </View>
  );
};

export default OurWorkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bag1Bg,
  },
});
