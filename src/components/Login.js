import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // handle the log in here
  }

  render() {
    return (
      <div className="login">
        <p className="login__welcome">
          Welcome back!
        </p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <label htmlFor="username">
            Username:
          </label>
          <input required id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="password">
            Password:
          </label>
          <input required id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <div className="login__button-container">
            <button type="submit" className="login__link">Log in</button>
          </div>
        </form>
        <div className="login__signup">
          <p>Ready to begin your journey?</p>
          <Link to="/register" className="signup__link">Sign up</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);