'use strict';

import React from 'react';


export class HomeModule extends React.Component {

    render() {

        return(

            <section id='home' className='center-block session-module'>
                <div className='home' >
                    <h2 className='center-text'>Sports Dashboard</h2>
                    <div className='btn-container'>
                        <a href='/login' className='pointer home-btn btn'> Login </a>
                        <a href='/register' className='pointer home-btn btn'> Register </a>
                    </div>
                </div>
            </section>

        );

    }

}