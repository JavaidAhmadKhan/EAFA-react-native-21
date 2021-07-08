import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PlayerListItem = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <View>
        <Text style={styles.name}>C. Ronaldo</Text>
        <Text>GSD vs SJD</Text>
      </View>

      <View>
        <Text style={styles.name}>$10.1m</Text>
        <Text>MID</Text>
      </View>
      <Text>29</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {},
  name: {},
  pointer: {},
});

export default PlayerListItem;
