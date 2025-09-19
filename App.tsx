// App.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreen/>
      {/* <HomeScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
