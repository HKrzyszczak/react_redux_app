import React, { Component } from 'react';
import { add, sub, reset } from './logic';

class Container extends  Component {


    handleInc = () => {
        add();
    };

    handleDec = () => {
        sub();
    };

    handleReset = () => {
        reset();
    };

    render() {

        return(
            <div>
                <h3>{this.state.counter}</h3>
                <button
                    onClick={this.handleInc}>
                    Inc
                </button>
                <button
                    onClick={this.handleDec}>
                    Dec
                </button>
                <button
                    onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        )
    }
}


export default Container;