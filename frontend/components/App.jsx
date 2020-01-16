import React from 'react'
import {AuthRoute, ProtectedRoute} from '../util/RouteUtil';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './navbar/NavBarContainer';
import UserShow from './users/UserShowContainer';
import ImageSlideIndex from './slider/ImageSlideIndex';
import BakeryIndex from './bakeries/BakeryIndexContainer';
import BakeryShow from './bakeries/BakeryShowContainer';
import Modal from './modals/Modal';

const App = ({location}) => (
  <div>
    <NavBarContainer />
    {/* <ImageSlideIndex /> */}
    <Modal/>
    <Switch>
      <Route path="/users/:username" component={UserShow}/>
      <Route path="/:storeType/:storeSlug" component={BakeryShow}/>
      <Route path="/:storeType" component={BakeryIndex}/>
      <Route path="/" render={() => <Redirect to="/bakeries" />}/>
    </Switch>
    
  </div>
);


export default App;