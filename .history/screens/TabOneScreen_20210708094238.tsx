import React, { useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import PlayerListItem from "../components/PlayerListItem";
import { players } from "../assets/data/players";

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);
  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  };

  const snapPoints = [0, "50%"];

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />
      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>

      <BottomSheet ref={playersBottomSheet} index={0} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <PlayerListItem player={players} />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#72CC5E",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  contentContainer: {},
});
