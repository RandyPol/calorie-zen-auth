import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './styles/Register.css'
import * as auth from '../auth.js'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      calGoal: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // registration handler here
    if (this.state.password === this.state.confirmPassword) {
      const { username, email, password } = this.state
      auth.register(username, email, password).then((res) => {
        if (res) {
          this.setState({ message: '' }, () => {
            this.props.history.push('/login')
          })
        } else {
          this.setState({
            message: 'Something went wrong!',
          })
        }
      })
    }
  }

  render() {
    return (
      <div className="register">
        <p className="register__welcome">Please register.</p>
        <form onSubmit={this.handleSubmit} className="register__form">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <label htmlFor="calGoal">Daily calorie goal:</label>
          <input
            id="calGoal"
            name="calGoal"
            type="number"
            value={this.state.calGoal}
            onChange={this.handleChange}
          />
          <div className="register__button-container">
            <button
              type="submit"
              onSubmit={this.handleSubmit}
              className="register__link"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="register__signin">
          <p>Already have an account??</p>
          <Link to="login" className="register__login-link">
            Log in here
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Register)
