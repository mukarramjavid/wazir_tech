import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import Contact from "./Components/Contact";
import Service from "./Components/Services";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/service/our_services" component={Service} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
        <hr />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
