import { StyleSheet, Text, View, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Home = () => {

    let [count, setCount] = useState(0)

    //let count = 15
    const addValue = () => {
        console.log("value added ", count)
        if (count < 20) {
            count = count + 1
        }
        else {
            console.log('value is not valid')
        }
        setCount(count)
    }



    // remove value 

    const removeVal = () => {
        console.log("remove value", count)
        if (count > 0) {
            count = count - 1
        }
        else {
            console.warn("you reach the limit")
        }
        setCount(count)
    }



    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Counter App </Text>
            <Text>Counter value : {count}</Text>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.button1}><Text style={{ fontSize: 20, padding: 10, color: 'white' }} onPress={addValue}>Increment</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}><Text style={{ fontSize: 20, padding: 10, color: 'white' }} onPress={removeVal}>Decrement</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    btn: {

        marginTop: 20
    },
    button1: {

        backgroundColor: 'purple',
        borderRadius: 5,

    },
    button2: {
        backgroundColor: 'purple',
        marginTop: 20,
        borderRadius: 5
    },

})