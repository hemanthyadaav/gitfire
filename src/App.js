import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import { initializeApp } from "firebase/app";
import "firebase/auth";
import FirebaseConfig from "./config/FirebaseConfig";

//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { UserContext } from "./context/UserContext";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Authentication from "./pages/Authentication";

//init firebase
initializeApp(FirebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/authenticate" component={Authentication} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
