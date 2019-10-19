import React, { Component } from 'react';
import Login from './login';

export default class loginpageContainer extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
            loading: false
        }
    }

    onChange = (event) => {

        this.setState({
            [event.target.name] : event.target.value
        });
        
    }

    _validate = () => {

        var regularExpression = {

            emailCheck : /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        
        }

        let { email, password } = this.state, errors = {};

        email = email.trim();

        if (email === '' || regularExpression.emailCheck.test(email) === false) {
            errors.email = "Not a valid email address. Valid email should be in the form example@example.com"
        };

        if (password === '' || password.length <= 2) {
            errors.password = "Not a valid password."
        }

        return errors;

    }

    _handleonSubmit = (event) => {

        event.preventDefault();
        
        let errors = this._validate();

        if (Object.keys(errors).length !== 0) {

            this.setState({
                errors
            });
            return;

        } else {

            this.setState({
                loading: true
            });

            this.props.login(); 

            this.setState({
                loading: false
            });

        }

    }

    render() {
        return (
            <Login 
                {...this.state}
                onChange={this.onChange}
                _handleonSubmit={this._handleonSubmit}
            />
        )
    }
}
