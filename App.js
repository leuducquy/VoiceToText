if(__DEV__) {
  import('./src/services/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from "react";
import Setup from "./src/boot/setup";

export default class App extends React.Component {
  render() {
    return <Setup />;
  }
}

