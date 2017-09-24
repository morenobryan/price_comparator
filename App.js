import React from "react";
import ComparePaper from "./src/ComparePaper/containers/ComparePaper";
import store from "./src/store";
import { Router, Scene, Stack } from "react-native-router-flux";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router sceneStyle={{ backgroundColor: "black" }}>
          <Stack key="root">
            <Scene
              key="comparePaper"
              component={ComparePaper}
              title="ComparePaper"
              initial
            />
            <Scene key="login" component={ComparePaper} title="Login" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
