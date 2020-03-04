import React from 'react'
import {Link} from 'react-router-dom'
import ProfileSvg from '../svg/profile_avatar_dark';

const UserInfoModal = ({ user, logout, closeModal }) => {
  return (
    <div className="user-info-modal">
      <nav>
        <ul>
          <li className="list-user-info-modal" onClick={closeModal}>
            <Link to={`/users/${user.username}`}>
              <div>
                <div className="avatar-list-user-info-modal">
                  <ProfileSvg size={48} viewbox={[0, 0]} />
                </div>
                <h4 className="username-list-user-info-modal">
                  {user.username}
                </h4>
                <div className="profile-list-user-info-modal">View Profile</div>
              </div>
            </Link>
          </li>
          <li className="separator"></li>
          <li className="list-user-info-modal" onClick={closeModal}>
            <Link to="/account/edit">Account Settings</Link>
          </li>
          <li className="list-user-info-modal" onClick={closeModal}>
            <Link to={`/users/${user.username}/following`}>Following</Link>
          </li>
          <li className="list-user-info-modal">
            {/*<Link to={`/users/${user.username}/favorites`}>Favorites</Link>*/}
            <div className="dummy-link">Favorites</div>
          </li>
          <li className="separator"></li>
          <li className="list-user-info-modal" onClick={closeModal}>
            <a onClick={logout} className="logout-button">
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserInfoModal
