import React from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import StyledText from './StyledText.jsx' 
import Constants from 'expo-constants'
import theme from './stylesGlobals/theme.js'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row',
 
    },
    scroll: {
        paddingBottom: 15,
    },
    text: {
        color: theme.colors.textSecondary,
        paddingHorizontal: 20
    },
    active: {
        color: theme.colors.textPrimary
    }
})

const AppBarTab = ({ children, to })=> {
    let {pathname} = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
            <AppBarTab to='/'>Home</AppBarTab>
            <AppBarTab to='/menu'>Menu</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar