import React from "react";
import Toast from 'react-native-toast-message';

import Home from "./src/pages/Home";

export default function App(){
  return(
    <>
      <Home/>
      <Toast />
    </>
  );
}