import React, { useState } from "react";
import { Text, StyleSheet, Button, View, TextInput } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  return (
    <View style={{ alignItems: "stretch" }}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      ></Button>
      <View style={{ alignItems: "center" }}>
        <Text>Current Count: {counter}</Text>
      </View>
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
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      ></TextInput>
      <View style={{ alignItems: "center" }}>
        <Text>Your name is: {name}</Text>
        {name.match(/\d/) ? (
          <Text>Error! Name can't contain numbers</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    color: "black",
  },
});

export default HomeScreen;
