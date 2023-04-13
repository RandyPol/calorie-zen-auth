import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Diary from './Diary'
import Tips from './Tips'
import Register from './Register'
import Login from './Login'
import NavBar from './NavBar'
import ProtectedRoute from './ProtectedRoute'
import './styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    // later, we'll need to check the user's token here, too!
  }
  handleLogin(e) {
    e.preventDefault()
    this.setState({
      loggedIn: true,
    })
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
