console.log('From index.js');
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
// Action creator
// {
//     type: BUY_CAKE,
//     info: 'First redux action'
// }

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

// (previousState, action) => newState

const initialState = {  // initial state
    numOfCakes: 10,
    numOfIceCream: 20
}

const initialCakeState = {  // initial state   
    numOfCakes: 10
}
const initialIceCreamState = {  // initial state
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState,action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState,action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

// 6. Redux Store
//     1. One store for the entire application
//     2. Responsibilities - 
//         1. Holds application state
//         2. Allows access to state via getState()
//         3. Allows state to be updated via dispatch(action)
//         4. Registers listeners via subscribe(listener)
//         5. Handles unregistering of listeners via the function returned by subscribe(listener)

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// const store = createStore(reducer);
const store = createStore(rootReducer);

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();



