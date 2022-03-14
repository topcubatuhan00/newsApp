import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

import news_data from '../data/news_data.json';
import news_banner_data from '../data/news_banner_data.json';
import NewsCard from './components/NewsCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>News App</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => (
                <Image
                  keyExtractor={item => item.id.toString()}
                  style={styles.bannerImage}
                  source={{uri: bannerNews.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          keyExtractor={item => item.u_id.toString()}
          data={news_data}
          renderItem={({item}) => <NewsCard news={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000000',
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
    letterSpacing: 1,
  },
  bannerImage: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1,
    marginBottom: 20,
  },
});

export default App;
