import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      ></Button>
      <Text>Current Count: {counter}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
