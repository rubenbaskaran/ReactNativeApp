import React, { useState } from "react";
import { Text, StyleSheet, Button, View, TextInput } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "red",
        alignItems: "stretch",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          position: "absolute",
          zIndex: 0,
          height: "100%",
          width: "100%",
          borderWidth: 1,
          borderColor: "blue",
        }}
      >
        <View style={{ flex: 4.75, backgroundColor: "green" }}></View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "blue",
            flexDirection: "column",
            top: 10,
            zIndex: 2,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              width: 100,
              height: "100%",
              alignSelf: "center",
            }}
          ></View>
        </View>
        <View style={{ flex: 4.75, backgroundColor: "orange" }}></View>
      </View>
      <View
        style={{
          flex: 2,
          borderWidth: 5,
          borderColor: "yellow",
        }}
      >
        <Text style={styles.text}>Home</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        ></Button>
        <View>
          <Text style={{ alignSelf: "center" }}>Current Count: {counter}</Text>
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
      <View
        style={{
          flex: 1,
          borderWidth: 5,
          borderColor: "green",
        }}
      ></View>
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
