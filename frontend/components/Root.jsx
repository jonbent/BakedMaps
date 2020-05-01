import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Hamburger from "./modals/Hamburger";
import Routes from "./Routes";
export default ({ store, persistor }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="#/">
          <Routes/>
          <Hamburger />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
};