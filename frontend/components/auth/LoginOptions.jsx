import React from 'react'
import MailIcon from "../svg/email";
import ProfileAvatar from "../svg/profile_avatar_dark";
import { Link } from "react-router-dom";

const LoginOptions = () => {
    return (
      <div>
        <Link to="/login?mode=demo" className="btn demo-sign-in">
          <div className="email-icon-container">
            <ProfileAvatar size={24} color="#ffffff" />
          </div>
          Log in with Demo
        </Link>
        <Link to="/login?mode=email" className="btn">
          <div className="email-icon-container">
            <MailIcon size={24} />
          </div>
          Log in With Email
        </Link>
        <Link to="/signup">New to bakedmaps? Sign up</Link>
      </div>
    );
}

export default LoginOptions
