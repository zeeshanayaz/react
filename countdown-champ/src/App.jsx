import React, {Component} from 'react';
import Clock from './Clock'
import './App.css';


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
        // console.log(deadLine);
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadLine}</div>
                {/*Clock components  */}
                <Clock />   
                <div>
                    <input 
                        type="text" 
                        onChange={event => this.setState({newDeadLline: event.target.value})} 
                        placeholder="new date, i.e January 1, 2018"
                    />
                    <button onClick={() => this.changeDeadLine()}>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;