import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Visualization from "../screens/Visualization";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigations">
        <Stack.Screen name="Navigations" component={Home} />
        <Stack.Screen name="Visualization" component={Visualization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
