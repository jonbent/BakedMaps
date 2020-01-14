import React from 'react'
import {AuthRoute, ProtectedRoute} from '../util/RouteUtil'
import NavBarContainer from './navbar/NavBarContainer'
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import ImageSlideIndex from './slider/ImageSlideIndex'
import { Route, Switch } from 'react-router-dom';
import BakeryIndex from './bakeries/BakeryIndexContainer'
import BakeryShow from './bakeries/BakeryShowContainer'
import Modal from './modals/Modal';

const App = () => (
  <div>
    <NavBarContainer />
    {/* <ImageSlideIndex /> */}
    <Modal/>
    <Switch>
      <Route path="/bakeries/:bakerySlug" component={BakeryShow}/>
      <Route path="/bakeries" component={BakeryIndex}/>
      <Route path="/deliveries/:bakerySlug" component={BakeryShow}/>
      <Route path="/deliveries" component={BakeryIndex}/>
      <Route path="/stores/:bakerySlug" component={BakeryShow}/>
      <Route path="/stores" component={BakeryIndex}/>
    </Switch>
    
  </div>
);


export default App;