import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AboutScreen = () => {
  return (
    <View>
      <Text style={styles.text}>AboutScreen!</Text>
      <Text style={styles.text}>:-)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default AboutScreen;
