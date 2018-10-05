import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        return (
            <div className="modal-active-darken">
                <div className="modal-container">
                    <AddVolunteerModalContent />
                </div>
            </div>
        )
    }
}


class AddVolunteerModalContent extends Component {
    render () {
        return (
            <div>
                <div className="volunteer-form-row">
                    <div className="volunteer-form-column-55">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Phone" />
                    </div>
                    <div className="volunteer-form-column-45">
                        <div className="profile-image-wrapper">
                            <img src="https://goo.gl/PoNcsv" />
                        </div>
                        <button className="button">Upload Photo</button>
                    </div>
                </div>
                <div className="volunteer-form-row">
                    <div className="volunteer-form-column-100">

                    </div>
                </div>
                <div className="submit-modal-buttons">

                </div>
            </div>
        )
    }
}