import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Diary from './Diary'
import Tips from './Tips'
import Register from './Register'
import Login from './Login'
import NavBar from './NavBar'
import ProtectedRoute from './ProtectedRoute'
import * as auth from '../auth.js'
import './styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
    this.handleTokenCheck = this.handleTokenCheck.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    // later, we'll need to check the user's token here, too!

    this.handleTokenCheck()
  }
  handleLogin(e) {
    e.preventDefault()
    this.setState({
      loggedIn: true,
    })
  }

  handleTokenCheck() {
    // if the user has a token in localStorage,
    // this function will check that the user has a valid token
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      // we'll verify the token
      auth.checkToken(jwt).then((res) => {
        if (res) {
          // we'll log the user in
          this.setState(
            {
              loggedIn: true,
            },
            () => {
              // we've also wrapped App.js with the withRouter HOC
              // so we now have access to this method
              this.props.history.push('/diary')
            }
          )
        }
      })
    }
  }

  render() {
    return (
      <>
        <Header />
        <main className="content">
          {this.state.loggedIn && <NavBar />}
          <Switch>
            <Route exact path="/">
              {this.state.loggedIn ? (
                <Redirect to="/diary" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <ProtectedRoute path="/diary" loggedIn={this.state.loggedIn}>
              <Diary />
            </ProtectedRoute>
            <ProtectedRoute path="/tips" loggedIn={this.state.loggedIn}>
              <Tips />
            </ProtectedRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login handleLogin={this.handleLogin} />
            </Route>
          </Switch>
        </main>
      </>
    )
  }
}

export default App
