import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Header from '../components/HomeCom/Header';
import Colors from '../constants/Colors';
import FAB from 'react-native-fab';
import Icon, {Icons} from '../components/Icons';
import LottieView from 'lottie-react-native';
import {SCREEN_WIDTH} from '../constants/Variables';

export const HomeScreen = () => {
  const lottie = '../assets/lottie/lf30_editor_hr2pnc0m.json';

  const WhatWeDo = text => {
    return (
      <View style={styles.wedoview}>
        <View style={styles.box}></View>
        <Text style={styles.wedotext}>{text.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={{...styles.text, fontSize: 25, marginTop: 10}}>
          QIC Softwares
        </Text>
        <Text
          style={{
            ...styles.text,
            fontSize: 18,
            color: Colors.accent,
            marginTop: 5,
          }}>
          Digital Solutions For Everyone
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

        <LottieView
          source={require(lottie)}
          autoPlay
          loop
          style={{
            width: SCREEN_WIDTH,
            right: -(SCREEN_WIDTH / 9),
          }}
        />

        <Text
          style={{
            ...styles.text,
            fontSize: 25,
            marginTop: 10,
            alignSelf: 'flex-end',
            top: -40,
          }}>
          What We Do
        </Text>
        <View style={{top: -30}}>
          <WhatWeDo text={'iOS Mobile App Development'} />
          <WhatWeDo text={'Android Mobile App Development'} />
          <WhatWeDo text={'UI/UX Design Services'} />
        </View>
        <Text
          style={{...styles.text, fontSize: 18, color: Colors.accent}}></Text>
      </ScrollView>
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

  scroll: {},

  contentContainer: {paddingBottom: 50},

  wedoview: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5,
  },

  wedotext: {
    color: Colors.primary,
    fontFamily: 'MavenPro-Medium',
    marginLeft: 10,
    fontSize: 18,
  },

  box: {
    height: 10,
    width: 10,
    borderRadius: 360,
    backgroundColor: 'yellow',
  },
});
