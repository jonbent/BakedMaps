import React, {Component} from 'react';
import '../../scss/users/AddressEdit.scss'

import {connect} from 'react-redux';

import CloseButton from '../svg/close_x_button'
import MarkerIcon from "../svg/marker_icon";
import {fetchAddresses} from "../../util/WMApiUtil";
import { debounce } from 'lodash';
import {saveUserField} from "../../actions/users";
class AddressEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: props.user.address,
            dropDown: false,
            addresses: [],
            selectedAddress: ""
        };
        this.emitInputChangeDebounce = debounce(this.emitInputChange.bind(this), 250);
        this.handleInput = this.handleInput.bind(this);
        this.handleAddrSelect = this.handleAddrSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        const {user, saveUserField} = this.props;
        const ad = this.state.selectedAddress;
        if (!ad) return null;
        saveUserField(user.username, {user: {address: `${ad.attributes.street}, ${ad.attributes.city}, ${ad.attributes.state_abv}`}})
    }
    handleAddrSelect(ad){
        this.setState({
            selectedAddress: ad,
            dropDown: false,
            inputVal: `${ad.attributes.street}, ${ad.attributes.city}, ${ad.attributes.state_abv}`
        });

    }
    emitInputChange(){
        if (this.state.inputVal !== ""){
            fetchAddresses(this.state.inputVal).then(res => {
                if (res.data.length){
                    this.setState({
                        addresses: res.data
                    }, () => {
                        this.setState({dropDown: true})
                    })

                } else {
                    this.setState({dropDown: false})
                }
            });
        } else {
            this.setState({dropDown: false})
        }


    }
    handleInput(e){
        this.setState({
            inputVal: e.target.value
        });
        this.emitInputChangeDebounce();
    }
    render() {
        const {dropDown, inputVal, addresses} = this.state;
        const {closeModal, user} = this.props;
        return (
            <div className="AddressEdit">
                <div className="header">
                    <h4>Edit Home Address</h4>
                    <div className="close-modal" onClick={closeModal}>
                        <CloseButton />
                    </div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <div className="home-address-input-container">
                            <div className="home-address-input">
                                <input
                                    placeholder="Enter Home Address"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    spellCheck="false"
                                    type="search"
                                    value={inputVal}
                                    onChange={this.handleInput}
                                />
                                <div>
                                    <MarkerIcon/>
                                </div>
                            </div>
                            {
                                !!dropDown && (
                                    <div className="address-drop-down">
                                        {addresses.map(ad => {
                                            return (
                                                <div key={ad.id} className="address-item" onClick={() => this.handleAddrSelect(ad)}>
                                                    <MarkerIcon/>
                                                    <span>{ad.attributes.street}, {ad.attributes.city}, {ad.attributes.state_abv}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            }
                        </div>
                        <div className="actions">
                            <button className="save" disabled={inputVal === user.address || inputVal === ""} onClick={this.handleSubmit}>Save</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddressEdit);