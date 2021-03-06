const ADD = 'counter/ADD';
const SUB =  'counter/SUB';
const RESET = 'counter/RESET';
const ADD_VALUE = 'counte/ADD_VALUE';
const ADD_FROM_SERVER = 'counter/ADD_FROM_SERVER';


export function fetchFromServer() {
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => dispatch(addValue(response.value)));
    }
}

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function reset() {
    return {
        type: RESET
    }
}

export function addValue(value) {
    return {
        type: ADD_VALUE,
        value
    }

}

const INITIAL_STATE = {
    counter: 0
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return Object.assign(
                {},
                state,
                { counter: state.counter + 1 }
            );
        case SUB:
            return Object.assign(
                {},
                state,
                { counter: state.counter - 1 }
            );
        case RESET:
            return Object.assign(
                {},
                state,
                { counter: 0 }
            );
        case ADD_VALUE:
            return Object.assign(
                {},
                state,
                { counter: state.counter + action.value }
            );
        default:
            return state;
    }
}