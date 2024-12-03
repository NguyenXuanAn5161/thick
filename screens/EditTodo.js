import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/actions";
import axios from "axios";

const EditTodo = ({ route, navigation }) => {
  const { id, currentTask } = route.params;
  const [task, setTask] = useState(currentTask);
  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://674d11d854e1fca9290e4189.mockapi.io/todos/${id}`,
        { task }
      );
      dispatch(editTodo(id, response.data.task));
      navigation.goBack(); // Quay lại màn hình trước
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Task</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter updated task"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  saveButton: {
    backgroundColor: "#4caf50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditTodo;
