import {View, StyleSheet, StatusBar, Text, ColorPropType} from 'react-native';
import React from 'react';
import Header from '../components/HomeCom/Header';
import Colors from '../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FAB from 'react-native-fab';
import Icon, {Icons} from '../components/Icons';

StatusBar.setBackgroundColor(Colors.bag1Bg);

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={{...styles.text, fontSize: 25, marginTop: 10}}>
        We Create Remarkable
      </Text>
      <Text
        style={{
          ...styles.text,
          fontSize: 18,
          color: Colors.accent,
        }}>
        Mobile Applications
      </Text>
      <TouchableOpacity style={styles.button1}>
        <Text
          style={{
            ...styles.text,
            fontSize: 15,
            marginRight: 15,
            color: Colors.white,
          }}>
          Request An App Now
        </Text>
        <Icon
          type={Icons.AntDesign}
          name={'arrowright'}
          color={Colors.white}
          size={20}
        />
      </TouchableOpacity>
      <FAB
        buttonColor={Colors.primary}
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          console.log('FAB pressed');
        }}
        visible={true}
        iconTextComponent={
          <TouchableOpacity>
            <Icon
              type={Icons.Ionicons}
              name={'md-chatbubbles'}
              color={Colors.white}
              size={20}
            />
          </TouchableOpacity>
        }
      />
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

  button1: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    height: 50,
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    flexDirection: 'row',
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
