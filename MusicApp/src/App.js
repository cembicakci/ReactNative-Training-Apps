import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SearchBar from './components/SearchBar'
import SongCard from './components/SongCard/SongCard'
import musicData from './music-data.json'

const App = () => {

  const [list, setList] = useState(musicData);

  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = text => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase()
      const currentTitle = song.title.toLowerCase()

      return currentTitle.indexOf(searchedText) > -1

    })

    setList(filteredList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  )
}


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0'
  }
})