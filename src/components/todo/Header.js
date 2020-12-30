import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component {
  render() {
    let isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="/" className="navbar-brand">
              Todo Apps
            </a>
          </div>
          <ul className="navbar-nav">
            <li>
              {isUserLoggedIn && (
                <Link className="nav-link" to="/welcome">
                  Home
                </Link>
              )}
            </li>
            <li>
              {isUserLoggedIn && (
                <Link className="nav-link" to="/todos">
                  Todo
                </Link>
              )}
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              {!isUserLoggedIn && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
            <li>
              {isUserLoggedIn && (
                <Link
                  className="nav-link"
                  to="/logouts"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
