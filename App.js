import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import React from "react";
import { GlobalContextProvider } from "./src/context";

// TODO: Add redux to manage some global variable

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );
};
