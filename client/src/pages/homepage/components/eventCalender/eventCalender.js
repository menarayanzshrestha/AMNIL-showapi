import React, { Component } from 'react';
import '../../../../App.css';
import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class EventCalender extends Component {

    render() {

        const { results } = this.props;

        return(
            <FullCalender 
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin ]}
                // events={[ 
                //     { title : 'event 1',hello : 'dfdf', date: '2019-10-19T17:00:00' },
                //     { title : 'event 2', date: '2019-10-20' },
                //  ]}
                events={results}
            />
        )
    }
}