const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 18
}

// Reducers (yang bisa update store hanyalah reducers)
const rootReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                age: state.age + action.newValue + action.newValue2
            }
        default:
            return state;
    }

}

// Store
const store = createStore(rootReducer)
console.log(store.getState())

// Subscription
store.subscribe(()=>{
    console.log('store change: ',store.getState())
})

// Action / Dispatch    
store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12, newValue2: 10 })
console.log(store.getState())

