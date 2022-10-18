import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants'
import Carrousel from "./Carrousel.jsx";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 7.5,
  }
})

const Home = () => {
    return (
      <View style={styles.container}>
        <Carrousel />
      </View>
    )
}

export default Home