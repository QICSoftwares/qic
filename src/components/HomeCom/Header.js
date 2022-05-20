import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {translogo} from '../../assets/images';
import Colors from '../../constants/Colors';
import Icon, {Icons} from '../Icons';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerview1}>
      <Image
        source={translogo}
        style={styles.logoicon}
        resizeMode={'contain'}
      />

      <View style={styles.drawerIcon}>
        <TouchableOpacity style={{}} onPress={() => navigation.openDrawer()}>
          <Icon
            type={Icons.Octicons}
            name={'apps'}
            color={Colors.white}
            size={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoicon: {
    height: 30,
    width: 30,
  },

  headertext1: {
    color: Colors.white,
    fontFamily: 'MavenPro-Bold',
  },

  headerview1: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },

  drawerIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Header;
