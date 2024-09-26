import React from 'react';
import "./main.global.css";
import HomePage from './pages/HomePage/HomePage';
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./store/reducer";
import {Provider} from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}