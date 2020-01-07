import React from 'react'
import {AuthRoute, ProtectedRoute} from '../util/RouteUtil'
import NavBarContainer from './navbar/NavBarContainer'
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import ImageSlideIndex from './slider/ImageSlideIndex'

const App = () => (
  <div>
    <NavBarContainer />
    <ImageSlideIndex />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);


export default App;