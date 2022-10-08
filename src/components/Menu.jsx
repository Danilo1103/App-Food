import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight + 10,
    }
  })

const Main = () => {
    return (
        <View style={styles.container}>
        <Text>Trabajando en el menu...</Text>
        </View>
    )
}

export default Main