import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { Formik, useField} from 'formik'
import StyledTextInput from '../StyledTextInput';

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 15
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)

    return(
        <StyledTextInput 
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
        />
    )
}

export default function Login(){
    return <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values}) => {
            return (
                <View style={styles.form}>
                    <FormikInputValue placeholder='E-mail' name='email'/>
                    <FormikInputValue placeholder='Password' name='password' secureTextEntry/>
                    <Button onPress={handleSubmit} title="Login"/>
                </View>
            )
        }}
    </Formik>
}