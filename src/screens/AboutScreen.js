import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ListItem from "../components/ListItem";

const friends = [
  { name: "friend #1", age: "25", imageCategory: "beach" },
  { name: "friend #2", age: "26", imageCategory: "forest" },
  { name: "friend #3", age: "27", imageCategory: "mountain" },
  { name: "friend #4", age: "28", imageCategory: "beach" },
  { name: "friend #5", age: "29", imageCategory: "forest" },
  { name: "friend #6", age: "30", imageCategory: "mountain" },
  { name: "friend #7", age: "31", imageCategory: "beach" },
  { name: "friend #8", age: "32", imageCategory: "forest" },
  { name: "friend #9", age: "33", imageCategory: "mountain" },
  { name: "friend #10", age: "34", imageCategory: "beach" },
];

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>About</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={styles.list}
        vertical
        showsVerticalScrollIndicator={true}
        data={friends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <ListItem
              name={item.name}
              age={item.age}
              image={item.imageCategory}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  list: {
    alignItems: "center",
  },
});

export default AboutScreen;
