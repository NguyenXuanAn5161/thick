import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./screens/Login";
import Register from "./screens/Register";
import TodoApp from "./screens/TodoApp";
import EditTodo from "./screens/EditTodo.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="TodoApp"
            component={TodoApp}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="EditTodo" component={EditTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
