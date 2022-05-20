import React from 'react';
import Navigation from './src/navigation/Navigation';
import Provider from './src/context/Provider';
import {StatusBar, LogBox} from 'react-native';
import Colors from './src/constants/Colors';

StatusBar.setBackgroundColor(Colors.bag1Bg);
LogBox.ignoreLogs(['ViewPropTypes']);

const App = () => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
};

export default App;
