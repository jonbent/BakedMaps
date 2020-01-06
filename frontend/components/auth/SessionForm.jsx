import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

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
            <div>
              <ul>
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
            </form>
          </div>
        )
    }

    //...
}
