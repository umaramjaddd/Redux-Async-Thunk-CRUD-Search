// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer.js";
import TermsConditions from "./Components/Terms&Conditions.js"; // Add the correct file extension
import { Home } from "./Components/Home.js";


const Routes = () => {
  return (
    <Router>
      
        <Switch>
          <Route path="/" component={Home} /> {/* Render Home component for the root path */}
          <Route path="/terms-conditions" component={TermsConditions} />
          
        </Switch>
      
      
    </Router>
  );
};

export default Routes;
