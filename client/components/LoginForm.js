import React, { Component } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import { graphql } from "react-apollo";

class LoginForm extends Component {
  login(email, password) {
    console.log(email);
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.login.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
