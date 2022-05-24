import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import Hello from './Hello';

function Counter() {

    const [counter, setCounter] = useState(0);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        console.log('number updated: ' + counter)
    }, [counter])

    function increase() {
        setCounter(counter + 1)
    }

    function decrease() {
        setCounter(counter - 1)
    }

    function hide(){
        setFlag(!flag)
    }

    return (
        <View>
            <Text>Count : {counter}</Text>
            <Button title='increase' onPress={increase} sty ></Button>
            <View style={{ marginTop: 5 }}>
                <Button title='decrease' onPress={decrease}></Button>
            </View>
            <View style={{ marginTop: 5 }}>
                <Button title='Change Flag' onPress={hide}></Button>
                {flag && <Hello/>}
            </View>
        </View>
    )

}


export default Counter;