import React, {Component} from 'react';
import CheckMark from "../svg/check_mark";
import '../../scss/users/UserEdit.scss';

import HireMe from "../HireMe";
class UserEdit extends Component {
    componentDidMount(){

    }
    render() {
        const {user, openModal} = this.props;
        const userBirthday = user.birthday ? user.birthday.split('-') : [];
        return (
            <div className="UserEdit">
                <div className="header">
                    <h3>Account Settings</h3>
                </div>
                <div className="edit-content-container">
                    <div className="edit-content">
                        <div className="user-settings">
                            <div className="user-setting-item">
                                <div className="value-container">
                                    <h4 className="value-title">Name</h4>
                                    {user.name}
                                </div>
                                <div className="edit-button-container">
                                    <button onClick={() => openModal("nameEdit")}>Edit</button>
                                </div>
                            </div>
                            <div className="user-setting-item">
                                <div className="value-container">
                                    <h4 className="value-title">Home Address</h4>
                                    {user.address}
                                </div>
                                <div className="edit-button-container">
                                    <button onClick={() => openModal("addressEdit")}>Edit</button>
                                </div>
                            </div>
                            <div className="user-setting-item">
                                <div className="value-container">
                                    <h4 className="value-title">Birthday</h4>
                                    {userBirthday.length !== 0 && `${userBirthday[1]}/${userBirthday[2]}/${userBirthday[0]}`}
                                </div>
                                <div className="edit-button-container">
                                    <button onClick={() => openModal("birthdayEdit")}>Edit</button>
                                </div>
                            </div>
                            <div className="user-setting-item">
                                <div className="value-container">
                                    <h4 className="value-title">Gender</h4>
                                    {user.gender}
                                </div>
                                <div className="edit-button-container">
                                    <button onClick={() => openModal("genderEdit")}>Edit</button>
                                </div>
                            </div>
                            <div className="user-setting-item">
                                <div className="value-container">
                                    <h4 className="value-title">Email</h4>
                                    {user.email} <CheckMark/>
                                </div>
                                <div className="edit-button-container">
                                    <button onClick={() => openModal("emailEdit")}>Edit</button>
                                </div>
                            </div>
                            <div className="user-setting-item">
                                <div className="value-container">
                                    <h4 className="value-title">Password</h4>
                                    Change Password
                                </div>
                                <div className="edit-button-container">
                                    <button onClick={() => openModal("passwordEdit")}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HireMe/>
                </div>
            </div>
        );
    }
}

export default UserEdit;