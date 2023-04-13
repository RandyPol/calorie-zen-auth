import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Diary from './Diary'
import Tips from './Tips'
import Register from './Register'
import Login from './Login'
import NavBar from './NavBar'
import './styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
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
            <Route exact path="/diary">
              <Diary />
            </Route>
            <Route path="/tips">
              <Tips />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </main>
      </>
    )
  }
}

export default App
