import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { authenticate } from './api/authenticate';

import LoginPageContainer from './pages/loginpage/loginpage.container';
import HomePageContainer from './pages/homepage/homepage.container';

class  App extends React.Component {

  constructor() {

    super();
  
    this.state = {
      isLoggedIn: authenticate() === true ? true : false 
    };

  }

  login = () => {

    localStorage.setItem('benarayanz@gmail.com', "Narayan Shrestha");
    this.setState({
      isLoggedIn: true
    });

  }

  logout = () => {

    localStorage.removeItem('benarayanz@gmail.com');
    this.setState({
      isLoggedIn: false
    });

  }

  render() {
    return (
      <Switch>

        <Route exact  path='/home' 
          render={
            () => !this.state.isLoggedIn ? 
              <LoginPageContainer login={this.login}/> 
              : 
              <HomePageContainer logout={this.logout} />  
          } 
        />

        <Route exact path='/login'
          render={
            () => !this.state.isLoggedIn ?
              <LoginPageContainer login={this.login} />
              :
              <Redirect to={{
                pathname: '/home',
              }} />
          }
        />

        <Route exact path='/' 
          render={
            () => this.state.isLoggedIn ?
            <Redirect to={{
              pathname: '/home'
            }} />
            :
            <Redirect to={{
              pathname: '/login'
            }} />
          }
        />

      </Switch>
    );
  }
}

export default App;
