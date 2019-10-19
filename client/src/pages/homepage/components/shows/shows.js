import React, { Component } from 'react';
import EventCalender from '../eventCalender/eventCalender';

export default class Shows extends Component {
    render() {

        const { results } = this.props;

        return (
            
            <EventCalender results={results}/>
            
        )
    }
}