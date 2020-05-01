import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter, useLocation} from 'react-router-dom';
const Auth = ({path, exact, loggedIn, component: Component}) => {
    const location = useLocation();
    const [prevPath, setPrevPath] = useState("/");
    useEffect(() => {
        if (location.state && location.state.prevPath) setPrevPath(location.state.prevPath)
    }, []);
    return (
        <Route
          path={path}
          exact={exact}
          render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to={prevPath} />
          }
        />
    )
};
const Protected = ({path, exact, loggedIn, component: Component}) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
)
const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.name) };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))