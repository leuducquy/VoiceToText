
import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "../App";
import {store, persistor} from "./configureStore";
import { PersistGate } from 'redux-persist/integration/react'


export default class Setup extends Component {

  constructor() {
    super();
   
  }
 
  
  render() {
  
    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
        
        </Provider>
    );
  }
}
