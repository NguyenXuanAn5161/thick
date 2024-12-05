import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducer";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.replace("Login"); // Điều hướng quay lại màn hình Login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user?.username}!</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <AddTodo />
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  logoutButton: {
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#4caf50",
    borderRadius: 5,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: "#4caf50",
    fontSize: 16,
  },
});

export default TodoApp;
