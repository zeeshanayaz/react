import React, {Component} from 'react';
import Clock from './Clock'
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            deadLine: 'December 2, 2017',
            newDeadLline: ''
        }
    }

    changeDeadLine(){
        this.setState({
            deadLine: this.state.newDeadLline
        })
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadLine}</div>
                {/*Clock components  */}
                <Clock deadLine= {this.state.deadLine} />   
                <Form inline>
                    <FormControl
                        className="DeadLine-input" 
                        type="text" 
                        onChange={event => this.setState({newDeadLline: event.target.value})} 
                        placeholder="new date, i.e M D, Y"
                    />
                    <Button onClick={() => this.changeDeadLine()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;