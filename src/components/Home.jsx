import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants'
import Carousel from 'react-bootstrap/Carousel';
import Bug from '../../img/Bug.jpg' 
import Bug02 from '../../img/Bug02.jpg' 
import Piz from '../../img/Piz.jpg' 

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
  }
})

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Trabajando en el home...</Text>
        </View>
    )
}

export default Home