import React, { Component } from 'react';
import { addValue } from './logic';



class CounterSuperButton extends Component {

    handleClick = () => {
       addValue();
    }

    render() {
        return(
            <button
                onClick={this.handleClick}>
                Dodaje 100!
            </button>
        )
    }
}

export default CounterSuperButton;