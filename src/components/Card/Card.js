import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './CardStyle';

const Card = () /*props*/ => {

  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1)
  }

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <Button title='Increase' onPress={increaseCounter}/>
      <Button title='Decrease' onPress={decreaseCounter}/>
      {/* <View style={styles.body}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.button_container}
      onPress={() => Alert.alert("Merhaba! " + props.name)} >
        <Text style={styles.button_title}>I LIKED</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Card;
