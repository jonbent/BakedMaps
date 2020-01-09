import React from 'react'
import MailIcon from "../svg/email";
import ProfileAvatar from "../svg/profile_avatar_dark";
import { Link } from "react-router-dom";

const SignupOptions = () => {
    return (
      <div>
        <Link to="/login?mode=demo" className="btn demo-sign-in">
          <div className="email-icon-container">
            <ProfileAvatar size={24} color="#ffffff" />
          </div>
          Log In with Demo
        </Link>
        <p>
          Bakedmaps respects privacy. Names and emails aren't displayed publicly,
          and nothing is posted to your Facebook or Google account without
          permission.
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
    );
}

export default SignupOptions
