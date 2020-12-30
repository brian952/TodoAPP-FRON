import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./Header";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import ListTodosComponent from "./ListtodosComponent";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute
              path="/welcome/:name"
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
            <AuthenticatedRoute path="/logouts" component={LogoutComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default TodoApp;
