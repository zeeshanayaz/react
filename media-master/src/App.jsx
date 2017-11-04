import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    search(){
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search/?';
        const FETCH_URL = BASE_URL + 'query=' + this.state.query
                            + '&offset=0&limit=20&type=artist';
        console.log('FETCH_URL',FETCH_URL);
        // https://api.spotify.com/v1/search?query=tania+bowra&offset=0&limit=20&type=artist
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">Media Master</div>
                {/* <div>
                    <input type="text" placeholder="search an artist..."/>
                    <button>Search</button>
                </div> */}
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="Search for an Artist.."
                            value = {this.state.query}
                            onChange = {event => {this.setState({query: event.target.value})}}
                            onKeyPress={ event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                            
                        />
                        <InputGroup.Addon onClick = {() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>Arist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;