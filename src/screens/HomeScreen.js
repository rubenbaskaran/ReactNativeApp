import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen :-)</Text>
      <Button
        title="Go to About"
        onPress={() => console.log("Button 1 pressed!")}
      ></Button>
      <TouchableOpacity onPress={() => console.log("Button 2 pressed!")}>
        <Text>Hello world!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
