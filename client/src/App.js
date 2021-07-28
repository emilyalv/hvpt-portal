import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activity from "./pages/Activity";
import Dashboard from "./pages/Dashboard";
import Module from "./pages/Module";
// import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <style>{"body { background-color:#FDF4E5; }"}</style>
        </Helmet>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* update these pages to take in parameters to display based on the selected module or activity */}
          <Route exact path="/module" component={Module} />
          <Route exact path="/activity" component={Activity} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
