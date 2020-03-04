import React, {Component} from 'react';
import '../../scss/users/GenderEdit.scss';
import CloseButton from '../svg/close_x_button';
import {saveUserField} from "../../actions/users";
import {connect} from 'react-redux';
const genderOptions = ["Female", "Male", "Not Specified", "Custom"];
class GenderEdit extends Component {
    constructor(props) {
        super(props);
        const curGender = genderOptions.indexOf(props.user.gender);
        const selected = !props.user.gender ? 2 : curGender !== -1 ? curGender : 3;
        this.state = {
            selected,
            inputVal: selected === 3 ? props.user.gender : ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(){
        if (this.state.selected === 3) {
            this.props.saveUserField(this.props.user.username, {user: {gender: this.state.inputVal}})
        } else {
            this.props.saveUserField(this.props.user.username, {user: {gender: genderOptions[this.state.selected]}})
        }
    }
    handleChange(e){
        this.setState({
            inputVal: e.target.value
        })
    }
    render() {
        const {closeModal, user} = this.props;
        const {inputVal, selected} = this.state;
        const curUserSelectedGender = genderOptions.indexOf(user.gender);
        const curUserSelectedGenderIdx = !user.gender ? 2 : curUserSelectedGender !== -1 ? curUserSelectedGender : 3;
        return (
            <div className="GenderEdit">
                <div className="header">
                    <h4>Edit Gender</h4>
                    <div className="close-modal" onClick={closeModal}>
                        <CloseButton />
                    </div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <fieldset>
                            {genderOptions.map((g, idx) => {
                                return (
                                    <div className="field-container" key={idx}>
                                        <label onClick={() => this.setState({selected: idx})}>
                                            <input type="radio"/>
                                            <div className="visible-input">
                                                {selected === idx && <div className="selected-radio"></div>}
                                            </div>
                                            <div className="label-val">{g}</div>
                                        </label>
                                    </div>
                                )
                            })}
                            {selected === 3 && (
                                <div className="custom-gender-input">
                                    <input type="text" value={inputVal} onChange={this.handleChange}/>
                                </div>
                            )}
                        </fieldset>
                        <div className="actions">
                            <button className="save" onClick={this.handleSubmit} disabled={(curUserSelectedGenderIdx === selected && selected !== 3)  || (curUserSelectedGenderIdx === selected && selected === 3 && user.gender === inputVal)}>Save</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(GenderEdit);