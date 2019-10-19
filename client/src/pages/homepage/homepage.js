import React, { Component } from 'react';
import DirSearchContainer from './components/dirSearch/dirSearchContainer.js';
import ShowsContainer from './components/shows/showsContainer.js';

import {
    Container,
    Menu
} from 'semantic-ui-react';

export class HomePage extends Component {

    render() {

        const { logout, activeItem, handleItemClick } = this.props;

        return (

            <div>

                <Menu fixed='top' inverted>

                    <Container>

                        <Menu.Item 
                            header
                        >
                            [ AMNIL TECH PVT. LTD. ]
                        </Menu.Item>

                        <Menu.Item 
                            name='directorySearch'
                            active={activeItem === 'directorySearch'}
                            onClick={(e) => handleItemClick(e, 'directorySearch')}
                        >
                            DIRECTORY SEARCH
                        </Menu.Item>

                        <Menu.Item 
                            name="shows"
                            active={activeItem === 'shows'}
                            onClick={(e) => handleItemClick(e, 'shows')}
                        >
                            SHOWS
                        </Menu.Item>

                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='LOGOUT'
                                onClick={logout}
                            />
                        </Menu.Menu>

                    </Container>

                </Menu>

                <div style={{ marginTop: '7em' }}>
                    <Container>
                        { 
                            activeItem === 'directorySearch' ? 
                                <DirSearchContainer /> 
                                : null
                        }
                        { 
                            activeItem === 'shows' ? 
                                <ShowsContainer /> 
                                : null
                        }
                    </Container>
                </div>
  
            </div>
        )
    }
}

export default HomePage;