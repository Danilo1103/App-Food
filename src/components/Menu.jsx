import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants'
import Login from './pages/Login';

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight + 10,
    }
  })

const Main = () => {
    return (
      <View style={styles.container}>
        <Login/>
        </View>
    )
}

export default Main