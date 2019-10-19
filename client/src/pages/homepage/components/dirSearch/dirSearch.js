import React, { Component } from 'react';
import { Button, List, Form, Segment, Header } from 'semantic-ui-react';

export default class DirSearch extends Component {

    render() {

        const { options, showResults, loading, dataToShow, results, onChange, drive, path } = this.props;
        
        return (
            <Segment placeholder>
                <Form onSubmit={showResults}>

                    <Form.Group widths='equal'>

                        <Form.Select
                            fluid
                            name="drive"
                            label='Drive'
                            options={options}
                            placeholder='Choose Drive'
                            value={drive}
                            required
                            onChange={(e,data) => onChange(e, "drive", data)}
                        />

                        <Form.Input fluid label='Path' placeholder='Path' name='path'  value={path} onChange={(e,data) => onChange(e, "path", data)}/>
                        
                        <Button primary  loading={loading} size="tiny">Show Results</Button>
                        
                    </Form.Group>
                    
                </Form>

               {
                   dataToShow ? 
                        <>
                            <Header>
                                Results are :
                            </Header>
                            <List ordered>
                                {
                                    results && results.map((data, index) => {
                                        return (
                                            <List.Item as='a' key={index}>{data}</List.Item>
                                        )
                                    })
                                } 
                            </List>
                        </>
                        : 
                        null
               }
                
            </Segment>
        )
    }
}