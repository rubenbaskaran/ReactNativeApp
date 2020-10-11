import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const friends = [
  { name: "friend #1", age: "25" },
  { name: "friend #2", age: "26" },
  { name: "friend #3", age: "27" },
  { name: "friend #4", age: "28" },
  { name: "friend #5", age: "29" },
  { name: "friend #6", age: "30" },
  { name: "friend #7", age: "31" },
  { name: "friend #8", age: "32" },
  { name: "friend #9", age: "33" },
  { name: "friend #10", age: "34" },
];

const AboutScreen = (props) => {
  return (
    <View>
      <Text style={styles.title}>AboutScreen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={styles.list}
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.listitem}>{item.name + " - " + item.age}</Text>
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
  listitem: {
    fontSize: 15,
    marginVertical: 50,
  },
});

export default AboutScreen;
