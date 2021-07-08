import * as React from "react";
import {
  StyleSheet,

  SafeAreaView,
  Platform,
} from "react-native";


const players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
};

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={field}
        resizeMode="contain"
        style={{
          width: "100%",
          aspectRatio: 2 / 3,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {Object.keys(players).map((position) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {players[position].map((player) => (
              <View style={{ alignItems: "center" }}>
                <FontAwesome5
                  name="tshirt"
                  size={35}
                  color={player ? "#d170db" : "#5c5c5cbb"}
                />
                <Text
                  style={{
                    backgroundColor: "#333333bb",
                    color: "white",
                    fontWeight: "bold",
                    fontSize:12,
                    padding: 2,
                    paddingHorizontal: 7,
                  }}
                >
                  {position}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
