import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit(email, password);
  }

  render() {
    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={event =>
                this.setState({
                  email: event.target.value
                })
              }
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={event =>
                this.setState({
                  password: event.target.value
                })
              }
            />
          </div>
          <button className="btn" onClick={this.onSubmit.bind(this)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
