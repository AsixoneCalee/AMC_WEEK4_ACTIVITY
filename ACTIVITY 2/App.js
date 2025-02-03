import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  { id: ' To di list: Toothbrush ', title: 'To do list',},
  {id: 'Facial wash',title: 'To do list', },
  { id: 'Take a bath ', title: 'To do list',
  },{
    id: 'Breakfast ',
    title: 'To do list',
  },{
    id: 'Cleaning ',
    title: 'To do list',
  },{
    id: 'Palying ',
    title: 'To do list',
  },{
    id: 'Scrolling ',
    title: 'To do list',
  },
  {
    id: 'Put food for pepper ',
    title: 'To do list',
  },
  {
    id: 'Watering plants ',
    title: 'To do list',
  },
  {
    id: 'Morning: Tiktok ',
    title: 'morning',
  },{
    id: 'Do the Math ',
    title: 'morning',
  },{
    id: 'packing a bag ',
    title: 'morning',
  },{
    id: 'Reading ',
    title: 'morning',
  },{
    id: 'Devotion ',
    title: 'morning',
  },{
    id: 'Praying ',
    title: 'morning',
  },{
    id: 'watching movie ',
    title: 'morning',
  },{
    id: 'Washing dishes ',
    title: 'morning',
  },
  {
    id: 'Afternoon: Eat lucnh',
    title: 'Afternoon ',
  },
{
    id: 'Wash Clothes',
    title: 'Afternoon ',
  },{
    id: 'Spotify',
    title: 'Afternoon ',
  },{
    id: 'Window shopping online',
    title: 'Afternoon ',
  },{
    id: 'Play games with siblings',
    title: 'Afternoon ',
  },{
    id: 'taking a nap',
    title: 'Afternoon ',
  },{
    id: 'Eating snacks',
    title: 'Afternoon ',
  },{
    id: 'Review',
    title: 'Afternoon ',
  },{
    id: 'Watching movie with fam',
    title: 'Afternoon ',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <TouchableOpacity> <Item title={item.id} /> </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;