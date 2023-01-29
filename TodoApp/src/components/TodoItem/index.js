import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TodoItem = ({ data, completedTodo, removeTodo }) => {

    console.log(data)

    return (
        <TouchableOpacity onPress={() => completedTodo(data.id)} onLongPress={() => removeTodo(data.id)}>
            <View style={data.isDone ? styles.completedContainer : styles.container}>
                <Text style={data.isDone ? styles.completedText: styles.text}>{data.todo}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        margin: 3,
        borderWidth: 1,
        backgroundColor: '#7da453',
        padding: 7,
        borderRadius: 5,
        marginTop: 0

    },
    completedContainer:{
        backgroundColor: '#37474f',
        margin: 3,
        borderWidth: 1,
        padding: 7,
        borderRadius: 5,
        marginTop: 0,

    },
    text: {
        color: '#fff'
    },
    completedText:{
        textDecorationLine: 'line-through'
    }
})