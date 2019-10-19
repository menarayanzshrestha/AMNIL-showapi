import React, { Component } from 'react';
import { Header, Form, Button, Message } from 'semantic-ui-react';
import styles from './login.module.scss';
import UserImage from './assets/img-01.png';

export default class Login extends Component {

    render() {

        const { email, password, errors, loading, onChange, _handleonSubmit } = this.props;

        return (
        
            <div className={styles.limiter}>
                <div className={styles.container_login100}>
                    <div className={styles.wrap_login100}>

                        <div className={`${styles.login100_pic} ${styles.js_tilt}`}>
                            <img src={UserImage} alt="IMG" />
                        </div>

                        <div className={`${styles.login100_form}`}>
                            <span className={styles.login100_form_title}>
                                <Header as='h2' textAlign='center'>
                                    Amnil Technologies Pvt. Ltd.
                                </Header>
                            </span><br/>

                            <Form onSubmit={(event) => {_handleonSubmit(event)}} size='large'>

                                    <Form.Input
                                        label='E-mail'
                                        placeholder='Your email address'
                                        name='email'
                                        required
                                        value={email}
                                        onChange={(event) => onChange(event)}
                                    />

                                    {
                                        errors.hasOwnProperty('email') ? <Message negative content={errors.email} /> : null
                                    }

                                    <Form.Input
                                        label='Password'
                                        placeholder='Password'
                                        type='password'
                                        name='password'
                                        required
                                        value={password}
                                        onChange={(event) => onChange(event)}
                                    />
                                    
                                    {
                                        errors.hasOwnProperty('password') ? <Message negative content={errors.password} /> : null
                                    }

                                    <Button
                                        className={styles.container_login100_form_btn} 
                                        content='Login'
                                        loading={loading}
                                        color={"blue"}
                                    />

                                </Form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
