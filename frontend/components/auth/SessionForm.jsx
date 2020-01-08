import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom';
import CheckMark from "../svg/check_mark";
import MailIcon from "../svg/email"
import ProfileAvatar from "../svg/profile_avatar_dark"

export default class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
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
      const {username, password, email} = this.state
      const emailField = this.props.formType === "Signup" ? 
         (
          <label>
            Email
              <input type="email" value={email} onChange={this.handleInput("email")} />
          </label>
        ) : (
          null
        )
        return (
          <div className="signup-splash">
            <div className="banner-container">
              <a className="dm-logo-container">
                <h1 className="dm-logo"></h1>
              </a>
              <div className="signup-banner-info">
                <h2>
                  Connecting you to the best bakeries, deliveries, and deals in
                  America
                </h2>
                <ul className="check-list">
                  <li>
                    <div className="check-list-checkmark">
                      <CheckMark />
                    </div>
                    <div className="check-list-info">
                      Find the best cookie storefronts
                    </div>
                  </li>
                  <li>
                    <div className="check-list-checkmark">
                      <CheckMark />
                    </div>
                    <div className="check-list-info">
                      See who delivers in your neighborhood
                    </div>
                  </li>
                  <li>
                    <div className="check-list-checkmark">
                      <CheckMark />
                    </div>
                    <div className="check-list-info">
                      Discover awesome deals{" "}
                    </div>
                  </li>
                  <li>
                    <div className="check-list-checkmark">
                      <CheckMark />
                    </div>
                    <div className="check-list-info">
                      Track your favorite places and products
                    </div>
                  </li>
                  <li>
                    <div className="check-list-checkmark">
                      <CheckMark />
                    </div>
                    <div className="check-list-info">
                      Enjoy peace of mind that you're getting the best of the
                      best.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main" id="content">
              <div className="form-container signup">
                <Link to="/signup" className="btn demo-sign-in">
                  <div className="email-icon-container">
                    <ProfileAvatar size={24} color="#ffffff"/>
                  </div>
                  Sign up with Demo
                </Link>
                <p>
                  Weedmaps respects privacy. Names and emails aren't displayed
                  publicly, and nothing is posted to your Facebook or Google
                  account without permission.
                </p>
                <div className="separator-container">
                  <span className="separator"></span>
                  <span>OR</span>
                  <span className="separator"></span>
                </div>
                <Link to="/signup?mode=email" className="btn">
                  <div className="email-icon-container">
                    <MailIcon size={24} />
                  </div>
                  Sign Up With Email
                </Link>
                <Link to="/login">ALREADY A MEMBER? LOG IN</Link>
              </div>
            </div>
          </div>
        );
    }

    //...
}
{/* <ul>
                  {
                      this.props.errors.map(error => {
                        return <li>{error}</li>
                      })
                  }
              </ul>
            <h1>{this.props.formType}</h1>
            <Link to={this.props.formType === "Signup" ? "/login" : "/signup"}>
              {this.props.formType === "Signup" ? "Login" : "Signup"}
            </Link>
            <form onSubmit={this.handleSubmit}>
              <label>
                Username
                <input type="text" value={username} onChange={this.handleInput("username")}/>
              </label>
              {emailField}
              <label>
                Password
                <input type="password" value={password} onChange={this.handleInput("password")}/>
              </label>
              <input type="submit" value={this.props.formType}/>
            </form> */}