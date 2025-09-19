import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // install: npm i react-native-vector-icons

const chats = [
  { id: "1", name: "User Name", time: "11:20 am" },
  { id: "2", name: "User Name", time: "11:20 am" },
];

const HomeScreen = () => {
  const renderChatItem = ({ item }: any) => (
    <View style={styles.chatItem}>
      <View style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.userName}>{item.name}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 🔹 Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>P2PChat</Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#000"
            style={styles.searchInput}
          />
          <Icon name="person-circle-outline" size={22} color="#000" style={styles.userIcon} />
        </View>
      </View>

      {/* 🔹 Chat List */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
        contentContainerStyle={{ padding: 10 }}
      />

      {/* 🔹 Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="globe-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1c1b1e" },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#d3d3d3",
    borderRadius: 6,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  searchInput: {
    width: 120,
    padding: 4,
    color: "#000",
  },
  userIcon: {
    marginLeft: 5,
  },

  // Chat Item
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b2c4a",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "#999",
    borderRadius: 6,
  },
  chatContent: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    color: "#fff",
    fontSize: 16,
  },
  time: {
    color: "#bbb",
    fontSize: 12,
  },

  // Bottom Nav
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: "#3b2c4a",
  },
});

export default HomeScreen;
