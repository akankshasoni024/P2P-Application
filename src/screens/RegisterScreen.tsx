import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function RegisterScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    console.log("Register pressed", { username, email, password, confirmPassword });
    // 👉 yaha API call ya validation kar sakte ho
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>P2PChat</Text>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Register</Text>

        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation?.navigate("Login")}
          style={styles.loginRedirect}
        >
          <Text style={styles.loginText}>
            Already Registered? <Text style={{ fontWeight: "bold" }}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1720", // Dark background
    padding: 20,
  },
  header: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#362A47", // Dark purple card
    borderRadius: 20,
    marginTop: 40,
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    color: "white",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#6E6681",
    color: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  loginRedirect: {
    marginTop: 20,
    alignItems: "center",
  },
  loginText: {
    color: "white",
  },
});
