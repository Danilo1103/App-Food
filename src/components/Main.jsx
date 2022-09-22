import React from 'react'
import { Text, View } from 'react-native'
import Home from './Home.jsx'
import { Route, Redirect, Switch } from 'react-router-native'
import AppBar from './AppBar.jsx'

const Main = () => {
    return (
        <View>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/menu' exact>
                    <Text>Trabajando el menu</Text>
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    )
}

export default Main