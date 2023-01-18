import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import Card from './components/Card'
import data from './data.json'

function App() {
  const [dataList, setDataList] = useState(data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    filteredData();
  }, [search])

  const filteredData = () => {
    const filteredData = data.filter(q => q.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase().trim()))
    setDataList([...filteredData])
  }

  const renderData = (data) => <Card items={data.item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        placeholder='Ara...'
        value={search}
        onChangeText={(e) => setSearch(e)}
        onChange={filteredData}
      />
      <FlatList
        data={dataList}
        renderItem={renderData}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'purple'
  },
  input: {
    height: 40,
    padding: 10,
    margin: 5,
    backgroundColor: '#efefef',
    borderRadius: 5
  }
})