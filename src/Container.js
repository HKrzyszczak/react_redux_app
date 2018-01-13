import React, { Component } from 'react';
import {add, sub, reset, addValue, fetchFromServer} from './logic';
import { connect } from 'react-redux';
import CounterAwesomeButton from "./CounterAwesomeButton";

const mapStateToProps = state => {
    return {
        value: state.counter.counter
    }

};

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch(add()),
        sub: () => dispatch(sub()),
        reset: () => dispatch(reset()),
        addValue: (newValue) => dispatch(addValue(newValue)),
        fetchFromServer: () => dispatch(fetchFromServer),
    }
};

class Container extends  Component {

    componentDidMount() {
      this.props.fetchFromServer();
    };

    handleInc = () => {
        this.props.add();
    };

    handleDec = () => {
        this.props.sub();
    };

    handleReset = () => {
        this.props.reset();
    };

    minusHundred = () => {
        this.props.addValue(-100);
    };

    render() {

        return(
            <div>
                <div>Counter: {this.props.value}</div>
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
                <div>
                <CounterAwesomeButton handleSub={this.minusHundred}/>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Container);