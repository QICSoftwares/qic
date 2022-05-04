import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {translogo} from '../../assets/images';
import Colors from '../../constants/Colors';

const Header = () => {
  return (
    <View style={styles.headerview1}>
      <Image
        source={translogo}
        style={styles.logoicon}
        resizeMode={'contain'}
      />
      <Text style={styles.headertext1}>QIC Softwares</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoicon: {
    height: 40,
    width: 40,
  },

  headertext1: {
    color: Colors.white,
    fontFamily: 'MavenPro-Bold',
  },

  headerview1: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default Header;
