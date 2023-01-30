import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from '../components/Button'

const WelcomeScreen = ({ navigation }) => {

    function goToMemberSign() {
        navigation.navigate('MemberSignScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fitness Salon</Text>
            <Button text={'Üye kaydı oluştur'} onPress={goToMemberSign} />
        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    }
})