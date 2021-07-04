import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Home = () => {
  let paths = [
    { name: "Path 1" },
    { name: "Path 2" },
    { name: "Path 3" },
    { name: "Path 4" },
    { name: "Path 5" },
  ];
  return (
    <View style={styles.container}>
      {paths.map((val, index) => (
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { marginTop: index === 0 ? null : 30 },
          ]}
        >
          <Text style={styles.buttonText}>{val.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  buttonContainer: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    borderRadius: 5,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default Home;
