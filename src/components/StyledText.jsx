import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from './stylesGlobals/theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontsWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontsWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textCenter: {
        textAlign: 'center'
    }
})

export default function StyledText ({aling, children, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        aling === 'center' && styles.textCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && style.subheading,
        fontWeight === 'bold' && style.bold,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}