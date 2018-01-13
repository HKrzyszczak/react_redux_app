const ADD = 'counter/ADD'
const SUB =  'counter/SUB'
const RESET = 'counter/RESET'
const ADD_VALUE = 'counte/ADD_VALUE'

export function add() {
    {
        type: ADD
    }
}

export function sub() {
    {
        type: SUB
    }
}

export function reset() {
    {
        type: RESET
    }
}

export function addValue(value) {
    {
        type: ADD_VALUE,
        value
    }

}

const INITIAL_STATE = {
    counter: 0
};

export default fuction reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return Object.assign(
                {},
                state,
                { counter: state.counter + 1 }
            )
        case SUB:
            return Object.assign(
                {},
                state,
                { counter: state.counter - 1 }
            )
        case RESET:
            return Object.assign(
                {},
                state,
                { counter: 0 }
            )
        case ADD_VALUE:
            return Object.assign(
                {},
                state,
                { counter: action.value }
            )
        case default:
            return state;
    }
}