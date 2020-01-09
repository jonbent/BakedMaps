import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/store'
import Root from './components/Root'
import CityUtil from './util/city_recommendations/CityStateUtil'
import { login, logout } from './util/SessionApiUtil';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.cities = new CityUtil
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        window.store = store(preloadedState);
        delete window.currentUser;
    } else {
        window.store = store();
    }
    window.login = login
    window.logout = logout
    ReactDOM.render(<Root store={window.store} />, root);
})