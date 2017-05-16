'use strict';

import React from 'react';
import axios from 'axios';

export class LogIn extends React.Component {

    constructor() {

        super()
        this.state = {
            showError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {

        const labels = {
            username: 'Username',
            password: 'Password',
            submit: 'Submit'
        };

        const {username, password, submit} = labels;

        return(

            <div>
                <form className='center-block'>
                    <input type='text' placeholder={ username } ref='username'/>
                    <input type='password' placeholder={ password } ref='password'/>
                    { this.state.showError && <span className='error'><small>Please fill all fields </small></span> }
                    <input onClick={ this.handleSubmit } className='pointer btn' type='submit' value={ submit }/>
                </form>
            </div>

        );

    }

    handleSubmit(e) {

        e.preventDefault();

        let username = this.refs.username.value;
        let password = this.refs.password.value;

        let user = { username, password };

        let validator = Helpers.validateFields(user);

        // === Set State for error messages
        this.setState({ showError: !validator });

        if( validator ) {

            axios.post(AppUrls.loginUser(), user);


        }

    }

}

