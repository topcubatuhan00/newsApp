import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';

import news_data from '../data/news_data.json';
import Banner from './components/Banner';
import NewsCard from './components/NewsCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>News App</Text>
        <FlatList
          ListHeaderComponent={() => <Banner />}
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
});

export default App;
