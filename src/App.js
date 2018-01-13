import React, { Component } from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import Container from "./Container";
import CounterSuperButton from './CounterSuperButton';
import counterReducer  from './logic';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    counter: counterReducer
});
const store = createStore(
    reducers,
    applyMiddleware(thunk),
    // compose(
    // window.devToolsExtension ? window.devToolsExtension(): f => f,
    // )
);

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
