import React, { Component } from 'react';
import swal from 'sweetalert';
import DirSearch from './dirSearch';
import request from '../../../../api/request';

const options = [
    { key: 'C:/', text: 'C:/', value: 'C:/' },
    { key: 'D:/', text: 'D:/', value: 'D:/' },
    { key: 'E:/', text: 'E:/', value: 'E:/' },
    { key: 'F:/', text: 'F:/', value: 'F:/' },
    { key: 'G:/', text: 'G:/', value: 'G:/' },
    { key: 'H:/', text: 'H:/', value: 'H:/' }
]

export class DirSearchContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
           results : [],
           loading : false,
           drive : '',
           path: '',
           dataToShow : false

        }
        
    }

    onChange = (e, name, data) => {
        
        this.setState({
            [name] : data.value
        })
    }

    showResults = (event) => {

        event.preventDefault();

        const { drive, path } = this.state;

        //to prevent empty drive and path
        if(drive !== "" && path !== "") {

            this.setState({
                loading : true
            })
    
            request('getsubfolders','post',{ dirToSearch : this.state.drive.concat(this.state.path) } )
            .then(res => {
               
                this.setState({
                    results : res.data.result,
                    loading : false,
                    dataToShow : true
                })
            })
            .catch(error => {

                if (error.response !== undefined) {

                    if (error.response.data.message) {
                        swal(error.response.data.message);
                    }
                }
                else {
                    swal("Opps!!!, We couldn't connect to our servers, please check your internet connection ");
                }

                this.setState({
                    loading : false
                })
            })
        }
        else {
            swal('Empty drive or path found');
        }

    }

    render() {
              
        return (
            <DirSearch 
                {...this.state}
                options={options}
                showResults={this.showResults}
                onChange={this.onChange}
                
            />
        )
    }
}

export default DirSearchContainer;