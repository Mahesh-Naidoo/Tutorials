const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//console.log('From index.js')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action
// 1. action is a object with type property
// 2. action creator - function that returns an action
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}

// reducer function details
// (previousState, action) => newState
// const initailState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initailCakeState = {
    numOfCakes: 10
}

const initailIceCreamState = {
    numOfIceCreams: 20
}

// reducer == shopkeeper better to have two one for cakes and one for ice cream
// this is useful for debguing and scaling
 
// const reducer = (state = initailState,action) => {
//     switch (action.type) {
//         case BUY_CAKE: return{
//         // it is safer to creat a copy of the state object, then change only properties 
//         // that need to be changed
//             ...state,
//             numOfCakes: state.numOfCakes -1  // this does not mutate state but returns a new object
//         }
//         case BUY_ICECREAM: return{
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams -1  // this does not mutate state but returns a new object
//             }

//         default: return state
//     }
// }

const cakeReducer = (state = initailCakeState,action) => {
    switch (action.type) {
        case BUY_CAKE: return{
        // it is safer to creat a copy of the state object, then change only properties 
        // that need to be changed
            ...state,
            numOfCakes: state.numOfCakes -1  // this does not mutate state but returns a new object
        }
        default: return state
    }
}

const iceCreamReducer = (state = initailIceCreamState,action) => {
    switch (action.type) {
        case BUY_ICECREAM: return{
                ...state,
                numOfIceCreams: state.numOfIceCreams -1  // this does not mutate state but returns a new object
            }

        default: return state
    }
}



// Store Details
// This is the first line of execution
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State',store.getState())
// this is a listener, any time state is changed, log to console
//const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))
const unsubscribe = store.subscribe(()=> {})
// update the store
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe() // unscribe to any changes in the store