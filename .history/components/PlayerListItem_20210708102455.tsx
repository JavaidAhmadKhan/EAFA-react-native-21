import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Player } from "../types";

interface Props {
  player: Player;
}

const PlayerListItem = ({ player }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.name}>ll</Text>
        <Text>nn</Text>
      </View>

      <View style={styles.colContainer}>
        <Text style={styles.name}>$12.1m</Text>
        <Text>kk</Text>
      </View>
      <Text style={styles.points}>no</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  colContainer: {
    marginHorizontal: 10,
    alignItems: "flex-end",
  },

  image: {},
  name: {
    fontWeight: "bold",
  },
  points: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PlayerListItem;
