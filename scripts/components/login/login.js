'use strict';

import React from 'react';

export class LogIn extends React.Component {

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
                    <input type='text' placeholder={ username }/>
                    <input type='password' placeholder={ password }/>
                    <input className='pointer btn' type='submit' value={ submit }/>
                </form>
            </div>

        );

    }

}

