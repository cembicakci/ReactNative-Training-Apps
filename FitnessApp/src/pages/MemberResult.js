import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const MemberResult = ({ route }) => {

    const { name, surname, age, email, city } = route.params.user

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.message}>Kayıt Tamamlandı!</Text>
                <Text style={styles.label}>Üye Adı: {name}</Text>
                <Text style={styles.label}>Üye Soyadı: {surname}</Text>
                <Text style={styles.label}>Üye Yaşı: {age}</Text>
                <Text style={styles.label}>Üye E-Posta: {email}</Text>
                <Text style={styles.label}>Üye İl: {city}</Text>
            </View>
        </SafeAreaView>
    )
}

export default MemberResult

const styles = StyleSheet.create({
    message: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    }
})