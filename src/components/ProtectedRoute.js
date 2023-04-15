import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AppContext } from './AppContext.js' // importing the context

function ProtectedRoute({ component: Component, ...props }) {
  const value = React.useContext(AppContext) // getting the values
  return (
    <Route>
      {() =>
        value.state.loggedIn === true ? (
          <Component {...props} userData={value.state.userData} />
        ) : (
          <Redirect to="./login" />
        )
      }
    </Route>
  )
}

export default ProtectedRoute
