/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import Card from "./src/components/Card";

const sayHello = label => {
  console.log("Merhaba" + label);
}

function App() {
  return (
    <View>
      <Card name="John Doe" text="bişi bişi"></Card>
    </View>
  );
}



export default App;