/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import State from './src/components/states/State';

const sayHello = label => {
  console.log("Merhaba" + label);
}

function App() {
  return (
    <View>
      <State></State>
    </View>
  );
}



export default App;