import counterReducer from './counter'
import loggedReducer from './isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer, // the name is your chouce and is coming from reducer
    isLogged: loggedReducer
})

export default allReducers