import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({ label, placeholder, onChangeText }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput  placeholder={placeholder} onChangeText={onChangeText}/>
            </View>
        </SafeAreaView>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 5,
        padding: 10,
        borderRadius: 5,
    }
})