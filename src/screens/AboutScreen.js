import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ListItem from "../components/ListItem";
import GlobalContext from "../context";

const AboutScreen = ({ navigation }) => {
  const context = useContext(GlobalContext);

  return (
    <>
      <Text style={styles.title}>About</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ borderWidth: 2, borderColor: "red" }}
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={styles.list}
        vertical
        showsVerticalScrollIndicator={true}
        data={context.listOfFriends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}></View>
              <ListItem
                name={item.name}
                age={item.age}
                image={item.imageCategory}
              />
              <View style={{ flex: 1 }}></View>
            </View>
          );
        }}
      ></FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: "green",
  },
  list: {
    alignItems: "stretch",
    borderWidth: 2,
    borderColor: "blue",
  },
});

export default AboutScreen;
