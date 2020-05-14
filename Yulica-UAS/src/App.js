import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import FirstPage from "./Home/FirstPage"
import Login from "./Login/Login";
import Signup from "../src/SignUp/Signup";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Route exact path="/home" component={FirstPage} />
          <Route exact path="/todo" component={FirstPage} />
          <Route exact path="/contact" component={FirstPage} />    
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </AuthProvider>
      </div>
      </Router>
  );
};

export default App;