import React from 'react';
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';

import {
  BrowserRouter as Router

} from "react-router-dom";
import Portfolio from './MyComponents/Portfolio';


export default function App() {


  return (

    <>

      <Header />
      <Router>
        <Navigation />
      </Router>
      <Footer />
    </>



  );
}

