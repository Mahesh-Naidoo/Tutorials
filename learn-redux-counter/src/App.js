import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'


function App() {
  const counter  = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter} </h1>
      {/* To actually do this increment/decrement
      ,we need to create action and when
      clicked, dispatch that action  */}
      {/* To pass parameters in dispatched action, use payload */}
      <button onClick = {() => dispatch(increment(5))}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Information to shown isLogged is true</h3>: ''}
    </div>
  );
}

export default App;
