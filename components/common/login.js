'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const labels = {
    title: 'Login',
    username: 'username',
    password: 'password',
    submit: 'submit'
};

// === CREATE component
class SignInComponent extends React.Component {

    render() {

        const {title, username, password, submit} = this.props.labels;

        return(
            <div id="login-form">
                <h3> { title } </h3>
                <form>
                    <label> { username } </label>
                    <input type="text"/>
                    <label> { password } </label>
                    <input type="text"/>
                    <input type="submit" value={ submit }/>
                </form>
            </div>
        );

    }

}



ReactDOM.render(<SignInComponent labels={labels} />, document.getElementById('login-form'));