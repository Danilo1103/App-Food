import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { BottomTab } from './src/navigation/BottomTab'
import { StatusBar } from 'expo-status-bar'
const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </>
  )
}

export default App
