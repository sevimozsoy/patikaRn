/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import First from './pages/First'
import Second from './pages/Second'
// import Counter from './components/lifecycle/Counter';
// import State from './components/states/State';

// const sayHello = label => {
//   console.log("Merhaba" + label);
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View>
    //    <Counter></Counter>
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First}/>
        <Stack.Screen name="Second" component={Second}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;