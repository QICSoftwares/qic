import React, {useState} from 'react';
import Context from './Context';

const Provider = props => {
  const [theme, setTheme] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [whiteBlack, setwhiteBlack] = useState('');

  const changeTheme = () => {
    if (theme == 'dark') {
      setTheme('light');
      setBgColor('#e8ecef');
      setPrimaryColor('black');
      setwhiteBlack('black');
    } else {
      setTheme('dark');
      setBgColor('#02161D');
      setPrimaryColor('#26C7BF');
      setwhiteBlack('white');
    }
    console.log(theme);
  };

  return (
    <Context.Provider
      value={{
        theme: theme,
        primaryColor: primaryColor,
        bgColor: bgColor,
        whiteBlack: whiteBlack,
        changeTheme: changeTheme,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
