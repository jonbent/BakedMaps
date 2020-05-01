import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class EmailForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             email: '',
             username: '',
             password: '',
             email_or_username: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e, field){
        this.setState({
            [field]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.processForm({formUser: this.state, history: this.props.history})
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }
    

    componentDidMount(){
        if (this.props.demoUser){
            let username = this.props.demoUser.email_or_username.split("");
            let password = this.props.demoUser.password.split("");
            const emailInterval = setInterval(() => {
                const first = username.splice(0,1);
                this.setState(
                    { email_or_username: this.state.email_or_username + first[0] },
                    () => {
                        if (!username.length) {
                            clearInterval(emailInterval); 
                            const passwordInterval = setInterval(() => {
                                const first = password.splice(0,1);
                                this.setState(
                                    { password: this.state.password + first[0] },
                                    () => {
                                        if (!password.length) {
                                            clearInterval(passwordInterval);
                                            console.log(this.props.history)
                                            this.props.processForm({formUser: this.state, history: this.props.history})
                                        } 
                                        
                                    }
                                ) 
                        }, 50)
                        }
                    }
                );
            }, 50);
        }
    }
    render() {
        const {formType, errors} = this.props;
        const emailField =
          formType === "Sign up" ? (
            <div className="field-container">
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                className="form-control"
                id="user_email"
                value={this.state.email}
                onChange={e => this.handleInput(e, "email")}
              />
              <div className="error-msg">
                <div className="error-msg">
                  {errors.email && (
                    <ul>
                      {errors.email.map(err => {
                        return <li>Email {err}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="field-container">
              <label htmlFor="user_email">Email or Username</label>
              <input
                type="text"
                className="form-control"
                id="user_email"
                value={this.state.email_or_username}
                onChange={e => this.handleInput(e, "email_or_username")}
                readOnly={this.props.demoUser ? true : false}
              />
            </div>
          );
        return (
          <form
            onSubmit={this.handleSubmit}
          >
            <h2 className="form-title">{formType}</h2>
            {emailField}
            <div className="field-container">
              <label htmlFor="user_password">Password</label>
              <input
                type="password"
                className="form-control"
                id="user_password"
                value={this.state.password}
                onChange={e => this.handleInput(e, "password")}
                readOnly={this.props.demoUser ? true : false}
                autoComplete="new-password"
              />
              {formType === "Sign up" && (
                <div className="hint">Needs to be at least 8 characters.</div>
              )}
              <div className="error-msg">
                {formType === "Sign up" && errors.password && (
                  <ul>
                    {errors.password.map(err => {
                      return <li>Password {err}</li>;
                    })}
                  </ul>
                )}
              </div>
            </div>
            {formType === "Sign up" && (
              <div className="field-container">
                <label htmlFor="user_username">Create a Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="user_username"
                  value={this.state.username}
                  onChange={e => this.handleInput(e, "username")}
                />
                <div className="hint">You can change this later.</div>
                <div className="error-msg">
                  {formType === "Sign up" && errors.username && (
                    <ul>
                      {errors.username.map(err => {
                        return <li>Username {err}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
            )}
            <button className="g-recaptcha" id="signup">
              {formType}
            </button>
            <Link to={formType === "Sign up" ? "/signup" : "/login"} className="btn secondary-button" name="cancel">
              Cancel
            </Link>
          </form>
        );
    }
}
