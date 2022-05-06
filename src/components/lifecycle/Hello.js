import React, {useEffect} from 'react'
import {Text} from 'react-native'

function Hello() {
  useEffect(() => {
    console.log('Ben çalışıyorum!')

    return() => {
        console.log('Cleanup fonksiyon çalıştı. Ben çalışmayı bıraktım!')
    }
  },[])
    return (
    <Text>Hello I'm another component! Toggle to the 'hide' Button
        to hide me!
    </Text>
  )
}

export default Hello