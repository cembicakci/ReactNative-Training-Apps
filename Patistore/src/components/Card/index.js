import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

function Card({ items }) {

    return (
        <View style={styles.container}>
            <Image source={{ uri: items.imgURL }} style={styles.img} />
            <View style={styles.body}>
                <Text style={styles.title}>{items.title}</Text>
                <Text style={styles.price}>{items.price}</Text>
                <Text style={styles.stock}>{items.inStock ? '' : 'STOKTA YOK'}</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        borderRadius: 5,
        padding: 10,
        margin: 4,
        flex: 1
    },
    body: {
        flex: 1
    },
    img: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 5,
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5
    },
    price: {
        fontWeight: 'bold',
        color: 'gray',
        marginTop: 5
    },
    stock: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: 5
    }
})