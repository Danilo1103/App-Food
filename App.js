import React from 'react'
import { Text, View } from 'react-native'
import Menu from './src/components/Menu.jsx'
import Home from './src/components/Home.jsx'
import AppBar from './src/components/AppBar.jsx'
import { NativeRouter, Route, Routes } from 'react-router-native'

const App = () => (
  <NativeRouter>
      <View>
        <AppBar/>
        <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/menu' element={<Menu />}/>
        </Routes>
        </View>
  </NativeRouter>
  )

export default App
