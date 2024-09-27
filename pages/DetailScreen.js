// pages/DetailScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function DetailScreen({ route }) {
  const { itemData } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: itemData.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{itemData.nama}</Text>
      <Text style={styles.subtitle}>NIM: {itemData.nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 24,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
  },
});

export default DetailScreen;