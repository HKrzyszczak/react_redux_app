import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import Container from "./Container";
import CounterSuperButton from './CounterSuperButton';
import counterReducer  from './logic';

const reducers = combineReducers({
    counter: counterReducer
});
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <div>
          <Container />
          <CounterSuperButton />
      </div>
    );
  }
}

export default App;
