import {connect} from 'react-redux';
import React from 'react';

import '../../scss/modals/Hamburger.scss';
import {Link} from "react-router-dom";
import {logout} from "../../actions/session";

const Hamburger = ({openStatus, loggedIn, user, logout}) => {
    return (
        <div className={`Hamburger ${openStatus ? "slide-in" : ""}`}>
            <div className="absolute-hamburger">
                {loggedIn && <div className="user-card">
                    <div className="user-avatar">
                        <img src={user.avatarUrl} alt={user.username}/>
                    </div>
                    <div className="username-container">
                        <div className="username">{user.username}</div>
                        <span className="view-profile">
                            <Link to={`/users/${user.username}`}>
                                View Profile
                            </Link>
                        </span>
                    </div>
                </div>}
                {!loggedIn && <div className="session-actions-container">
                    <div className="session-actions">
                        <Link to="/login">
                            <button className="login">Log in</button>
                        </Link>
                        <Link to="/signup">
                            <button className="signup">Sign up</button>
                        </Link>
                    </div>
                </div>}
                <div className="site-links">
                    <Link to="/">Home</Link>
                    <Link to="/bakeries">Bakeries</Link>
                    <Link to="/deliveries">Deliveries</Link>
                    <Link to="/stores">Stores</Link>
                    {!!loggedIn && <Link to="/" onMouseDown={logout}>Logout</Link>}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({entities, ui, session}) => ({
    openStatus: ui.hamburger,
    loggedIn: Boolean(session.name),
    user: entities.users[session.name]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)