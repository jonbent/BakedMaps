import React, {Component} from 'react';
import {connect} from 'react-redux';

import CloseButton from '../svg/close_x_button';

import '../../scss/users/EmailEdit.scss'
import {saveUserField} from "../../actions/users";

class NameEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: props.user ? props.user.email : ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        this.setState({
            inputVal: e.target.value
        })
    }
    handleSubmit(){
        this.props.saveUserField(this.props.user.username, {user: {email: this.state.inputVal}})
    }
    render() {
        const {inputVal} = this.state;
        const {closeModal, user} = this.props;
        return (
            <div className="EmailEdit">
                <div className="header">
                    <h4>Edit Email</h4>
                    <div className="close-modal" onClick={closeModal}>
                        <CloseButton />
                    </div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <div className="email-input-container">
                            <div className="email-input">
                                <input
                                    placeholder="Enter Email"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    spellCheck="false"
                                    type="search"
                                    value={inputVal}
                                    onChange={this.handleInput}
                                />
                            </div>
                        </div>
                        <div className="actions">
                            <button className="save" onClick={this.handleSubmit} disabled={inputVal === user.email}>Save</button>
                            <button className="cancel" onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({entities, session}) => {
    return {
        user: entities.users[session.name]
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveUserField: (username, fieldVal) => dispatch(saveUserField(username, fieldVal))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NameEdit);
