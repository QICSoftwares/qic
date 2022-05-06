import React from 'react';

export default React.createContext({
  theme: 'dark',
  bgColor: '#02161D',
  primaryColor: '#26C7BF',
  whiteBlack: 'white',
  changeTheme: () => {},
});
