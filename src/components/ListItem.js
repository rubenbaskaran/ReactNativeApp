import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { withNavigation } from "react-navigation";

const ListItem = ({ name, age, image, navigation }) => {
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
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => navigation.navigate("Home", { name: name, age: age })}
      >
        <Image source={resourceNumber} style={styles.imageitem}></Image>
      </TouchableOpacity>
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

export default withNavigation(ListItem);
