import React, {Component} from 'react';
import {connect} from 'react-redux';

import CloseButton from '../svg/close_x_button';

import '../../scss/users/PasswordEdit.scss'
import {saveUserField} from "../../actions/users";

class PasswordEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPass: "",
            newPass: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e, field){
        this.setState({
            [field]: e.target.value
        })
    }
    handleSubmit(){
        this.props.saveUserField(this.props.user.username, {user: {"password": this.state.newPass, "curPassword": this.state.oldPass}})
    }
    render() {
        const {oldPass, newPass} = this.state;
        const {closeModal, user, errors} = this.props;
        return (
            <div className="PasswordEdit">
                <div className="header">
                    <h4>Edit Password</h4>
                    <div className="close-modal" onClick={closeModal}>
                        <CloseButton />
                    </div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <label className="password-input-label">
                            <div className="label-header">Current Password</div>
                            <div className="password-input">
                                <input
                                    autoComplete="new-password"
                                    autoCorrect="off"
                                    spellCheck="false"
                                    type="password"
                                    value={oldPass}
                                    onChange={e => this.handleInput(e, "oldPass")}
                                />
                            </div>
                        </label>
                        <label className="password-input-label new">
                            <div className="label-header">New Password</div>
                            <div className="password-input">
                                <input
                                    autoComplete="new-password"
                                    autoCorrect="off"
                                    spellCheck="false"
                                    type="password"
                                    value={newPass}
                                    onChange={e => this.handleInput(e, "newPass")}
                                />
                            </div>
                            <div className={`field-description ${errors.password ? "error" : ""}`}>{errors.password ? errors.password : "At least 8 characters."}</div>
                        </label>
                        <div className="actions">
                            <button className="save" onClick={this.handleSubmit}>Save</button>
                            <button className="cancel" onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({entities, session, errors}) => {
    return {
        user: entities.users[session.name],
        errors: errors.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveUserField: (username, fieldVal) => dispatch(saveUserField(username, fieldVal))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PasswordEdit);
