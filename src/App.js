import React, { Suspense, lazy } from "react";
import "./App.css";
/*import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import Contact from "./Components/Contact";
import Service from "./Components/Services";
import About from "./Components/About";*/
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Home = lazy(() => import('/Components/Home'));
const About = lazy(() => import('/Components/About'));
const Service = lazy(() => import('/Components/Service'));
const Contact = lazy(() => import('/Components/Contact'));
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
       <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        <Suspense/>
        <hr />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
