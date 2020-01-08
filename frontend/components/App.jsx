import React from 'react'
import {AuthRoute, ProtectedRoute} from '../util/RouteUtil'
import NavBarContainer from './navbar/NavBarContainer'
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import ImageSlideIndex from './slider/ImageSlideIndex'
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavBarContainer />
    <ImageSlideIndex />
    {/* <Route path="/" component={}/> */}
    
  </div>
);


export default App;