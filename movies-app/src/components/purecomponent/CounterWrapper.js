import React from 'react';
import Buttons from './Buttons';
import Count from './Count';

export default class CounterWrapper extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
        
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    handleDecrement(){
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }

    render() {
        return (
            <React.Fragment>
                <Buttons onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
                {' '}
                <Count value={this.state.count}/>
            </React.Fragment>
        )
    }
}