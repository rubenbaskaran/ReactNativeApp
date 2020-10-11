import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const ListItem = (props) => {
  return (
    <View style={styles.listitem}>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
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
