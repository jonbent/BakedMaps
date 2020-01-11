import React from 'react'
import {AuthRoute, ProtectedRoute} from '../util/RouteUtil'
import NavBarContainer from './navbar/NavBarContainer'
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import ImageSlideIndex from './slider/ImageSlideIndex'
import { Route } from 'react-router-dom';
import BakeryIndex from './bakeries/BakeryIndexContainer'
import BakeryShow from './bakeries/BakeryShowContainer'

const App = () => (
  <div>
    <NavBarContainer />
    {/* <ImageSlideIndex /> */}
    <Route exact path="/bakeries" component={BakeryIndex}/>
    <Route exact path="/bakeries/:bakerySlug" component={BakeryShow}/>
    
  </div>
);


export default App;