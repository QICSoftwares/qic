import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {TextInput} from 'react-native-paper';

const RequestForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formHead}>
        <Text style={styles.text}>Request An App</Text>
      </View>
      <View style={styles.innercontainer}>
        <TextInput
          label="Full Name"
          style={styles.textinput}
          underlineColor={Colors.primary}
          activeUnderlineColor={Colors.primary}
        />

        <Text>
          FullName Phone Number Email Name Company/Project Describe Project
          Short logoicon Your bugjet
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    height: 410,
  },

  innercontainer: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontFamily: 'MavenPro-Bold',
    color: Colors.white,
  },

  formHead: {
    backgroundColor: Colors.primary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 50,
    padding: 10,
    justifyContent: 'center',
  },

  textinput: {
    width: '100%',
    backgroundColor: Colors.bag1Bg,
  },
});

export default RequestForm;
