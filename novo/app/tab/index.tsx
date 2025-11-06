import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function HomeScreen() {
  const handleGrades = () => Alert.alert("Grades", "Grades screen will open here!");
  const handleAssignments = () => Alert.alert("Assignments", "Assignment upload page here!");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>School Webpage System</Text>
      <Text style={styles.subtitle}>Welcome to the LMS</Text>

      <TouchableOpacity style={styles.button} onPress={handleGrades}>
        <Text style={styles.buttonText}>View Grades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAssignments}>
        <Text style={styles.buttonText}>Assignments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
