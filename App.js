import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import React from "react";
import { GlobalContextProvider } from "./src/context";
import {Provider} from "react-redux";
import {createStore} from "redux";
import combineReducers from "./src/reduxStore"

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
    <Provider store={createStore(combineReducers)}>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    </Provider>
  );
};
