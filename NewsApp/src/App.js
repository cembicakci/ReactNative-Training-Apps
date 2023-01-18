import React from 'react'
import { SafeAreaView, Text, FlatList, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native'
import NewsCard from './components/NewsCard'
import news_data from './news_data.json'
import news_banner_data from './news_banner_data.json'

function App() {

  const renderNews = (data) => <NewsCard news={data.item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal>
            {
              news_banner_data.map(bannerNews => <Image key={bannerNews.id} style={styles.bannerImage} source={{ uri: bannerNews.imageUrl }} />)
            }
          </ScrollView>
        )}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1'
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50
  }
})