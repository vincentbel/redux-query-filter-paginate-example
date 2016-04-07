import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import SearchPage from './containers/SearchPage'

export default (
  <Route path="/" component={App}>
    <Route path="search" component={SearchPage} />
  </Route>
)
