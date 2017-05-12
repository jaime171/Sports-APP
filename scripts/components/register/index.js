'use strict';

import React from 'react';
import { Register } from './register';

class RegisterModule extends React.Component {

    render() {

        return (

            <section id='register-form' className='center-block session-module'>
                <div className='register-form center-text'>
                    <h2> Member Register </h2>
                    <Register />
                    <a href='/login' className='center-block'>Log In</a>
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
    RegisterModule
}
