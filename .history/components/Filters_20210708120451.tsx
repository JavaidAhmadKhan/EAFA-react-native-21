import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Filters = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FWD</Text>
      <Text style={styles.text}>MID</Text>
      <Text style={styles.text}>DEF</Text>
      <Text style={styles.text}>GCK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  text: {},
});

export default Filters;
