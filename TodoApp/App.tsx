
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TodoItem from './src/components/TodoItem';

function App() {

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: 'Çöpler atılacak',
      isDone: false,
    },
    {
      id: 2,
      todo: 'Ev temizlenecek',
      isDone: false,
    }
  ]);

  const [item, setItem] = useState('');
  console.log(item)

  const addTodo = () => {
    setTodoList([...todoList, {
      id: Math.floor(Math.random() * 10000),
      todo: item,
      isDone: false
    }])

    setItem('')
  }

  const completedTodo = (id) => {
    const newTodoList = [...todoList];
    newTodoList.map((item) => {
      if (item.id === (id)) {
        item.isDone = !item.isDone
      }
      return item
    })

    setTodoList([...newTodoList])
  }

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(q => q.id !== id)
    setTodoList([...newTodoList])

  }

  const filterIsDone = todoList.filter(q => !q.isDone)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Yapılacaklar</Text>
        <Text style={styles.count}>{filterIsDone.length}</Text>
      </View>

      <FlatList
        data={todoList}
        renderItem={(data) => <TodoItem data={data.item} completedTodo={completedTodo} removeTodo={removeTodo} />}
      />

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          cursorColor='#a0a0a0'
          selectionColor='#c0c0c0'
          value={item}
          onChangeText={(e) => setItem(e)}
          placeholder="Yapılacak..."
          placeholderTextColor='#757e83'
        />
        <TouchableOpacity style={item.length > 0 ? styles.coloredBtn : styles.btn} onPress={addTodo}>
          <Text style={styles.btnText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f2027',
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  text: {
    color: '#ffa001',
    fontSize: 36,
    fontWeight: 'bold',
  },
  count: {
    color: '#ffa001',
    fontSize: 36
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#36474f',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    marginTop: 'auto'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#a0a0a0',
    paddingTop: 5,
    paddingBottom: 5,
    color: '#fff'
  },
  btn: {
    backgroundColor: '#808080',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#f7f7f7'
  },
  coloredBtn: {
    backgroundColor: '#f29e02',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    padding: 10,
  }
})
