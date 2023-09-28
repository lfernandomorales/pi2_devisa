
import "./App.css";
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
//import logo from "./images/logo.png";
//import * as yup from "yup";
//import { ErrorMessage, Formik, Form, Field } from "formik";
//import Axios from "axios";
//import { useState } from "react";

function App() {
 
  return (
    <BrowserRouter>

      <Routes/>

    </BrowserRouter>
  );
  
}

export default App;
