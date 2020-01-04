import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { currentUser, logout } = this.props;
        
        const greetingBar = currentUser ? (
            <div>
                <p>Welcome {currentUser.username}</p>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        );
        return(
            greetingBar
        )
    }
}
export default Greeting