import React from 'react';
import {View, Text, Button} from 'react-native'



const First = ({navigation}) => {
    return(
        <View>
            <Text>First Screen</Text>
            <Button onPress={() =>navigation.navigate('Second')} title={"İkinci ekram"}></Button>
        </View>
    )
}

export default First