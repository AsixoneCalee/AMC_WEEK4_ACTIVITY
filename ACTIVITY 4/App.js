import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const initialData = [
  { id: "1", task: "Toothbrush", completed: false },
  { id: "2", task: "Facial wash", completed: false },
  { id: "3", task: "Take a bath", completed: false },
  { id: "4", task: "Breakfast", completed: false },
  { id: "5", task: "Cleaning", completed: false },
  { id: "6", task: "Playing", completed: false },
  { id: "7", task: "Scrolling", completed: false },
  { id: "8", task: "Put food for Pepper", completed: false },
  { id: "9", task: "Watering plants", completed: false },
  { id: "10", task: "Morning: Tiktok", completed: false },
  { id: "11", task: "Do the Math", completed: false },
  { id: "12", task: "Packing a bag", completed: false },
  { id: "13", task: "Reading", completed: false },
  { id: "14", task: "Devotion", completed: false },
  { id: "15", task: "Praying", completed: false },
  { id: "16", task: "Watching movie", completed: false },
  { id: "17", task: "Washing dishes", completed: false },
  { id: "18", task: "Afternoon: Eat lunch", completed: false },
  { id: "19", task: "Wash Clothes", completed: false },
  { id: "20", task: "Spotify", completed: false },
  { id: "21", task: "Window shopping online", completed: false },
  { id: "22", task: "Play games with siblings", completed: false },
  { id: "23", task: "Taking a nap", completed: false },
  { id: "24", task: "Eating snacks", completed: false },
  { id: "25", task: "Review", completed: false },
  { id: "26", task: "Watching movie with fam", completed: false },
];

const TaskItem = ({ item, toggleTask }) => (
  <TouchableOpacity
    onPress={() => toggleTask(item.id)}
    style={[
      styles.item,
      { backgroundColor: item.completed ? "#aad5ff" : "#ffe4e1" },
    ]}
  >
    <Text style={styles.taskText}>{item.task}</Text>
    <Text style={styles.checkbox}>{item.completed ? "✔️" : "⭕"}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [tasks, setTasks] = useState(initialData);

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.listContainer}>
          <Text style={styles.header}>✅ Done ({tasks.filter(t => t.completed).length})</Text>
          {tasks.some(task => task.completed) ? (
            <FlatList
              data={tasks.filter((task) => task.completed)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TaskItem item={item} toggleTask={toggleTask} />}
            />
          ) : (
            <Text style={styles.noTasks}>No completed tasks</Text>
          )}

          <Text style={styles.header}>❌ Not Done ({tasks.filter(t => !t.completed).length})</Text>
          {tasks.some(task => !task.completed) ? (
            <FlatList
              data={tasks.filter((task) => !task.completed)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TaskItem item={item} toggleTask={toggleTask} />}
            />
          ) : (
            <Text style={styles.noTasks}>All tasks are done!</Text>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  taskText: {
    fontSize: 18,
  },
  checkbox: {
    fontSize: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  noTasks: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 10,
  },
});

export default App;
