import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (
        <React.Fragment>
            <button onClick = {this.props.onReset} className = "btn btn-primary btn-sm">Reset</button>
            {this.props.counters.map(counter => (<Counter key = {counter.id} onDelete = {this.props.onDelete} onIncrement = {this.props.onIncrement} counter = {counter}/>))}
        </React.Fragment>);
    }
    
}
 
export default Counters;