import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {iphone} from '../../assets/images';
import {SCREEN_WIDTH} from '../../constants/Variables';
import Colors from '../../constants/Colors';

const Phone = () => {
  return (
    <View style={styles.bg}>
      <Text style={{...styles.text, fontSize: 25, marginTop: 10}}>
        Kicks Citi
      </Text>
      <Image source={iphone} style={styles.phoneimg} resizeMode={'stretch'} />
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    marginTop: 40,
    height: SCREEN_WIDTH,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  phoneimg: {
    height: SCREEN_WIDTH - 20,
    width: SCREEN_WIDTH / 1.79,
    alignSelf: 'flex-end',
  },

  text: {
    fontFamily: 'MavenPro-Bold',
    color: Colors.white,
  },
});
