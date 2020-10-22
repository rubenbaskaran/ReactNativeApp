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
      <View style={styles.textitem}>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
      <Image source={resourceNumber} style={styles.imageitem}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  listitem: {
    fontSize: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    padding: 10,
    flex: 8,
  },
  imageitem: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: "black",
    width: "100%",
  },
  textitem: {
    alignSelf: "flex-start",
  },
});

export default ListItem;
