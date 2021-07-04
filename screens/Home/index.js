import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Data1 from "../../dataSets/data_run_1.json";
import Data2 from "../../dataSets/data_run_2.json";
import Data3 from "../../dataSets/data_run_3.json";
import Data4 from "../../dataSets/data_run_4.json";
import Data5 from "../../dataSets/data_run_5.json";

const Home = (props) => {
  let paths = [
    { name: "Path 1", data: Data1 },
    { name: "Path 2", data: Data2 },
    { name: "Path 3", data: Data3 },
    { name: "Path 4", data: Data4 },
    { name: "Path 5", data: Data5 },
  ];
  return (
    <View style={styles.container}>
      {paths.map((val, index) => (
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { marginTop: index === 0 ? null : 30 },
          ]}
          onPress={() =>
            props.navigation.navigate("Visualization", {
              data: val.data,
            })
          }
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
