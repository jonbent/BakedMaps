import React, {Component} from 'react';
import CloseButton from '../svg/close_x_button';
import {connect} from "react-redux";

import '../../scss/users/BirthdayEdit.scss';
import {saveUserField} from "../../actions/users";
import dateformat from 'dateformat'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
class BirthdayEdit extends Component {
    constructor(props) {
        let userBirthdate;
        if (props.user.birthday){
            userBirthdate = new Date(dateformat(props.user.birthday, 'mm/dd/yyyy'));
        } else {
            userBirthdate = new Date();
            userBirthdate.setFullYear(userBirthdate.getFullYear() - 21);
        }

        super(props);
        this.state = {
            curDate: userBirthdate.getDate(),
            curYear: userBirthdate.getFullYear(),
            curMonth: userBirthdate.getMonth(),
            lastDay: new Date(userBirthdate.getFullYear(), userBirthdate.getMonth() + 1, 0).getDate()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.props.saveUserField(this.props.user.username, {
            user: {
                birthday: new Date(this.state.curYear, this.state.curMonth, this.state.curDate)
            }
        })
    }
    handleChange(e, field){
        switch(field){
            case 'month':
                this.setState({
                    curMonth: e.target.value,
                    lastDay: new Date(this.state.curYear, e.target.value + 1, 0).getDate()
                });
                break;
            case 'date':
                this.setState({
                    curDate: e.target.value
                });
                break;
            case 'year':
                this.setState({
                    curYear: e.target.value,
                    lastDay: new Date(e.target.value, this.state.curMonth + 1, 0).getDate()
                });
                break;
            default:
                return null;
        }
    }
    render() {
        const {closeModal, user} = this.props;
        const {curMonth, curDate, curYear, lastDay} = this.state;
        const todaysDate = new Date();
        todaysDate.setFullYear(todaysDate.getFullYear() - 21);
        const startingYear = todaysDate.getFullYear();
        const savedUserBirthday = user.birthday ? new Date(dateformat(user.birthday, 'mm/dd/yyyy')) : null;
        if (savedUserBirthday) {
            savedUserBirthday.setHours(0,0,0,0);
        }
        return (
            <div className="BirthdayEdit">
                <div className="header">
                    <h4>Edit Birthday</h4>
                    <div className="close-modal" onClick={closeModal}>
                        <CloseButton />
                    </div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <div className="birthday-input-container">
                            <div className="month-selector">
                                <label htmlFor="month-select">Month</label>
                                <select id="month-select" value={curMonth} onChange={e => this.handleChange(e, 'month')}>
                                    {months.map((m, idx) => {
                                        return <option key={idx} value={idx}>{`${idx < 9 ? `0${idx + 1}` : idx + 1} - ${m}`}</option>
                                    })}
                                </select>
                            </div>
                            <div className="day-selector">
                                <label htmlFor="day-select">Day</label>
                                <select id="day-select" value={curDate} onChange={e => this.handleChange(e, 'date')}>
                                    {[...new Array(lastDay)].map((el, idx) => {
                                        return <option key={idx} value={idx + 1}>{idx + 1}</option>
                                    })}
                                </select>
                            </div>
                            <div className="year-selector">
                                <label htmlFor="year-select">Year</label>
                                <select id="year-select" value={curYear}  onChange={e => this.handleChange(e, 'year')}>
                                    {[...new Array(100)].map((el, idx) => {
                                        return <option key={idx} value={startingYear - idx}>{startingYear - idx}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="actions">
                            <button className="save" disabled={!savedUserBirthday && new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate()).getTime() === new Date(curYear, curMonth, curDate).getTime()} onClick={this.handleSubmit}>Save</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(BirthdayEdit);