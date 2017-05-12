'use strict';

import React from 'react';
import { LogIn } from './login';

class LogInModule extends React.Component {

    render() {

        return (

            <section id='login-form' className='center-block'>
                <div className='login-form center-text'>
                    <h2> Member Login </h2>
                    <LogIn />
                    <a href='/signup' className='center-block'>New User?</a>
                </div>
            </section>

        )

    }

}


class Title extends React.Component {

    render() {

        return (

           <h1>chingo putittos</h1>

        )

    }

}

export {
    LogInModule,
    Title
}
