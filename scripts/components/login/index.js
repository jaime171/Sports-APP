'use strict';

import React from 'react';
import { LogIn } from './login';

class LogInModule extends React.Component {

    render() {

        return (

            <section id='login-form' className='center-block session-module'>
                <div className='login-form center-text'>
                    <h2> Member Login </h2>
                    <LogIn />
                    <a href='/register' className='center-block'>New User?</a>
                </div>
            </section>

        )

    }

}


class Title extends React.Component {

    render() {

        return (

           <h1>Second Component</h1>

        )

    }

}

export {
    LogInModule,
    Title
}
