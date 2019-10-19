import React, {Component} from 'react';
import Show from './shows';
import { Loader } from 'semantic-ui-react';
import request from '../../../../api/request';

export default class ShowsContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            results : [],
            gotData : false
        }
    }

    componentDidMount = () => {

        this.mounted = true;      
        this._getData();
    }

    _getData = () => {

        request('api/shows', 'get')
        .then(res => {

            if(this.mounted) {

                let dataWeReceive = res.data.result;

                //changing the data as we want
                let resultWeWant = dataWeReceive.map((data) => {
                    return {
                        title: data.Movie.MovieName,
                        date : data.ShowDateTime
                    }
                })
    
                this.setState({
                    results : resultWeWant,
                    gotData : true
                })
            }
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentWillUnmount = () => {

        // avoiding apicall
        this.mounted = false;
    }

    render() {

        const  { gotData } =  this.state;
        return (
            
            gotData ? 
                <Show {...this.state} />
                : 
                <Loader indeterminate active inline='centered' >Fetching data</Loader>
            
        )
    }
}
