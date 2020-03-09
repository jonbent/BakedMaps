import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/store'
import Root from './components/Root'
import CityUtil from './util/city_recommendations/CityStateUtil'
import { login, logout } from './util/SessionApiUtil';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.username]: window.currentUser }
            },
            session: { name: window.currentUser.username },
            ui: {
                city: {
                    name: "San Francisco",
                    state_id: "CA",
                    state_name: "California",
                    lat: 37.7562,
                    lng: -122.443,
                    timezone: "America/Los_Angeles",
                    id: 1840021543
                }
            }
        };
        window.store = store(preloadedState);
        delete window.currentUser;
    } else {
        window.store = store({
          ui: {
            city: {
              name: "San Francisco",
              state_id: "CA",
              state_name: "California",
              lat: 37.7562,
              lng: -122.443,
              timezone: "America/Los_Angeles",
              id: 1840021543
            }
          }
        });
    }
    const clearCity = () => ({
        type: CLEAR_CITY
    })
    if (process.env.NODE_ENV === "development") {
        window.login = login;
        window.logout = logout;
        window.clearCity = () => window.store.store.dispatch(clearCity());
    }
    ReactDOM.render(<Root store={window.store.store} persistor={window.store.persistor}/>, root);
})
export const CLEAR_CITY = "CLEAR_CITY";
