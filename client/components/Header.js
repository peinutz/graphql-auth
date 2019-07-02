import React, { Component } from "react";
import { graphql, createNetworkInterface } from "react-apollo";
import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";
import { Link } from "react-router";

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { user, loading } = this.props.data;

    const renderLoggedIn = (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );

    const renderLoggedOut = (
      <li>
        <a onClick={this.onLogoutClick.bind(this)}> Logout </a>
      </li>
    );

    if (loading) return <div />;

    const button = user ? renderLoggedOut : renderLoggedIn;

    return button;
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo left" to="/">
            Home
          </Link>
          <ul className="right">
            <div>{this.renderButtons()}</div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
