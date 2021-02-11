import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import allReducers from './reducers'
import {Provider} from 'react-redux' //connects our global state to the app

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

// import {createStore} from 'redux'
// //STORE -> globalised state - stores information + state for entire application

// //ACTIION -> Increment -just describes what you want to do
// // just a function that returns an object

// const increment = () => {
//   return{
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return{
//     type: 'DECREMENT'
//   }
// }

// //REDUCER -> describes how actions change the state into the next state

// const counter = (state = 0,action) => {
//   switch(action.type){
//     case 'INCREMENT': 
//       return state +1;
//     case 'DECREMENT':
//       return state -1;
//     default: 
//       return state;
//   }
// };

// let store = createStore(counter);

// // Display in console
// store.subscribe(() => console.log(store.getState()))

// //DISPATCH -> send the action to the reducer (and updates the store)
// store.dispatch(increment());



