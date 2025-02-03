
import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

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


const COLORS = ['#f9c2ff', '#aad5ff', '#c0ffb7', '#ffc0cb', '#ffe4e1'];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}> 
    <Text style={[styles.title, { color: textColor }]}>{item.id}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = isSelected ? '#aad5ff' : COLORS[index % COLORS.length];
    const color = isSelected ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
