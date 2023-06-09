import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as auth from '../auth.js'
import { AppContext } from './AppContext.js' // added here
import './styles/Login.css'

class Login extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    const value = this.context //refer to the context
    e.preventDefault()
    // handle the log in here
    if (!this.state.username || !this.state.password) {
      return
    }
    // we need to authorize our user here
    // then we'll need to check the token
    // finally, we'll redirect the user to the '/ducks' page
    auth
      .authorize(this.state.username, this.state.password)
      .then((data) => {
        if (data.jwt) {
          this.setState(
            {
              username: '',
              password: '',
            },
            () => {
              value.handleLogin() //update our code
              this.props.history.push('/diary')
            }
          )
        }
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="login">
        <p className="login__welcome">Welcome back!</p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <label htmlFor="username">Username:</label>
          <input
            required
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="login__button-container">
            <button type="submit" className="login__link">
              Log in
            </button>
          </div>
        </form>
        <div className="login__signup">
          <p>Ready to begin your journey?</p>
          <Link to="/register" className="signup__link">
            Sign up
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
