//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Header/Navbar"
import React, { Component } from 'react'
import $ from 'jquery'
import ItemListContainer from "./components/Header/ItemListContainer.js"
import ItemsContainer from "./components/MainSection/ItemsContainer.js"

export default class App extends Component {
  jQuerycode = () => {
    (function () {
      $(".shopping-cart").fadeOut();
      $("#cart").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
      });
    })();
  }

  componentDidMount(){
    this.jQuerycode()
  }

  render() {
    return (
      <>
        <Navbar />
        <ItemListContainer saludo="Bienvenido"/>
        <ItemsContainer saludo="Bienvenido"/>
      </>
    )
  }
}
