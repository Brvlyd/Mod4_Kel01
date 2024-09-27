// pages/ProfileScreen.js
import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text } from "react-native"; 
import { useNavigation } from "@react-navigation/native";
import { data } from "../data/data"; 
import Header from "../components/Header"; 
 
function ProfileScreen() { 
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("Detail", { itemData: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.nama}</Text>
        <Text style={styles.nim}>NIM: {item.nim}</Text>
      </View>
    </TouchableOpacity>
  );

  return ( 
    <View style={styles.container}> 
      <Header headerText={"Kelompok 01"} flexPosition={"center"} /> 
      <FlatList 
        showsVerticalScrollIndicator={false} 
        data={data} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} 
      /> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: "white", 
    padding: 16, 
  }, 
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ccc",
  },
  textContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  nim: {
    fontSize: 14,
    color: "#555",
  },
}); 
 
export default ProfileScreen;