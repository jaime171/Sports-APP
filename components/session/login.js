'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const labels = {
    title: 'Member Login',
    username: 'Username',
    password: 'Password',
    submit: 'Submit',
    newUser: 'New User?'
};

// === CREATE component
class SignInComponent extends React.Component {

    render() {

        const {title, username, password, submit, newUser} = this.props.labels;

        return(
            <div className='login-form center-text'>
                <h2> { title } </h2>
                <form className='center-block'>
                    <input type='text' placeholder={ username }/>
                    <input type='password' placeholder={ password }/>
                    <input className='pointer btn' type='submit' value={ submit }/>
                </form>
                <a href='/signup' className='center-block'> { newUser } </a>
            </div>
        );

    }

}



ReactDOM.render(<SignInComponent labels={labels} />, document.getElementById('login-form'));