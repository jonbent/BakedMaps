import React, {Component} from 'react';

import SignupForms from './SignupForms';
import LoginForms from './LoginForms';
import {Switch, Route} from 'react-router-dom';
import SignupSplash from './SignupSplash'
import LoginSplash from "./LoginSplash";
export default class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(field){
    return e => {
        this.setState({
            [field]: e.target.value
        })
    }
  }

  render(){
    const {processForm, formType, errors, clearErrors} = this.props
    return (
      <div className="signup-splash">
        <div className="banner-container">
          <a className="dm-logo-container">
            <h1 className="dm-logo"></h1>
          </a>
          <div className="signup-banner-info">
            <Route path="/signup" component={SignupSplash} />
            <Route path="/login" component={LoginSplash} />
          </div>
        </div>
        <div className="main" id="content">
          {
            (formType === "Log in" && errors.length) ? (
              <div className="alert alert-danger">
                {errors[0]}
              </div>
            ) : null
          }
          <div className="form-container signup">
            <Route
              exact
              path="/signup"
              render={props => (
                <SignupForms
                  {...props}
                  processForm={processForm}
                  formType={formType}
                  errors={errors}
                  clearErrors={clearErrors}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <LoginForms
                  {...props}
                  processForm={processForm}
                  formType={formType}
                  errors={errors}
                  clearErrors={clearErrors}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}