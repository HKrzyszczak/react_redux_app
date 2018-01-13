import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import Container from "./Container";
import CounterSuperButton from './CounterSuperButton';
import counterReducer  from './logic';
import { Provider } from 'react-redux';

const reducers = combineReducers({
    counter: counterReducer
});
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <div>
          <Container />
          <CounterSuperButton />
      </div>
      </Provider>
    );
  }
}

export default App;
