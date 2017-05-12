'use strict';

import React from 'react';

export class Register extends React.Component {

    render() {

        const labels = {
            username: 'Username',
            password: 'Password',
            passwordConfirm: 'Confirm Password',
            mail: 'Email',
            submit: 'Submit'
        };

        const {username, password, passwordConfirm, mail, submit} = labels;

        return(

            <div>
                <form action='/register' method='post' className='center-block'>
                    <input type='text' placeholder={ username }/>
                    <input type='password' placeholder={ password }/>
                    <input type='password' placeholder={ passwordConfirm }/>
                    <input type='mail' placeholder={ mail }/>
                    <input className='pointer btn' type='submit' value={ submit }/>
                </form>
            </div>

        );

    }

}

