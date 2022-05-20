import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import * as Screen from '../screens';
import Icon, {Icons} from '../components/Icons';
import React from 'react';
import Colors from '../constants/Colors';
import {translogo} from '../assets/images';
import {Image} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: Colors.bag1Bg,
      }}
      labeled={false}>
      <Tab.Screen
        name="Home"
        component={Screen.HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon type={Icons.Octicons} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={Screen.AboutScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              type={Icons.Octicons}
              name="organization"
              color={color}
              size={21}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OurWorkScreen "
        component={Screen.OurWorkScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              type={Icons.MaterialCommunityIcons}
              name="view-dashboard-outline"
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Request"
        component={Screen.RequestScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={translogo}
                style={{
                  height: 30,
                  width: 30,
                }}
                resizeMode={'contain'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
