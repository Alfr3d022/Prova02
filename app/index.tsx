import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4D4D4D', '#282828']}
        style={styles.background}
      />
      <View style={styles.content}>
        <Text style={styles.title}>LOGIN <Text style={styles.subtitle}>/ Loja Varejo</Text></Text>

        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: 278,
    height: 116
  },
  background: {
    position: "static"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "300",
    color: "#ccc",
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 58,
    color: "white",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#184BFF",
    borderRadius: 25,
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});