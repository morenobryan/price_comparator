import React from "react";
import Dashboard from "./src/Dashboard/containers/Dashboard";
import store from "./src/store";
import { Router, Scene, Stack } from "react-native-router-flux";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router sceneStyle={{ backgroundColor: "black" }}>
          <Stack key="root">
            <Scene key="dashboard" component={Dashboard} initial />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
