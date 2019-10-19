import React, { Component } from 'react';
import HomePage from './homepage';

export class HomePageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'directorySearch'
        }
    }

    handleItemClick = (e, name) => {
        this.setState({ 
            activeItem: name 
        })
    }

    render() {

        const { logout } = this.props;
        
        return (
            <HomePage 
                {...this.state}
                logout={logout}
                handleItemClick={this.handleItemClick}
            />
        )
    }
}

export default HomePageContainer;