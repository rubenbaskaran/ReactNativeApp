import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

const ListItem = ({ name, age, image }) => {
  let resourceNumber = "";

  switch (image) {
    case "beach":
      resourceNumber = require("../../assets/beach.jpg");
      break;
    case "forest":
      resourceNumber = require("../../assets/forest.jpg");
      break;
    case "mountain":
      resourceNumber = require("../../assets/mountain.jpg");
      break;
  }

  return (
    <View style={styles.listitem}>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Image source={resourceNumber}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  listitem: {
    fontSize: 15,
    marginBottom: 20,
  },
});

export default ListItem;
