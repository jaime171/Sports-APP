'use strict';

import React from 'react';
import axios from 'axios';

export class Register extends React.Component {

    constructor() {

        super();
        this.state = {
            showError: false,
            showPasswordError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

    }

    render() {

        return(

            <div>
                <form className='center-block'>
                    <input type='text' onChange={ this.onInputChange } placeholder='Username' ref='username'/>
                    <input type='password' placeholder='Password' ref='password'/>
                    <input type='password' placeholder='Password Confirm' ref='passwordConfirm'/>
                    <input type='email' placeholder='Email' ref='email'/>
                    { this.state.showError && <span className='error'><small>Please fill all fields </small></span> }
                    { this.state.showPasswordError && <span className='error'><small>Password are not the same </small></span> }
                    <input onClick={ this.handleSubmit } className='pointer btn' type='submit' value='submit'/>
                </form>
            </div>

        );

    }

    onInputChange() {

        this.setState({ showError: false });

    }

    handleSubmit(e) {

        e.preventDefault();

        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let passwordConfirm = this.refs.passwordConfirm.value;
        let email = this.refs.email.value;

        let user = { username, password, passwordConfirm, email };

        let validator = Helpers.validateFields(user);

        // === Set State for error messages
        this.setState({ showError: !validator });

        if( validator ) {

            if(password === passwordConfirm) {

                // === If all inputs are validated then we make the API call
                axios.post(AppUrls.registerUser(), user)

                    .then(function (response) {

                        if(response.data){

                            window.location = '/login';

                        }

                    });

            } else {

                this.setState({ showPasswordError: true });

            }

        }

    }

}

