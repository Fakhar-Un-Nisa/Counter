import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './index'

const RootLayout = () => {
    return (
        <View style={styles.container}>

            <View style={styles.view}>
                <Home />
            </View>
        </View>

    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50%',
    },
    view: {
        margin: '20%',
    }
})