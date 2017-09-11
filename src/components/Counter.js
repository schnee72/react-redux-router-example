import React from 'react';

const Counter = props =>
  <div>
    <span>Count: {props.count}</span>{' '}
    <button onClick={props.minus}>-</button>{' '}
    <button onClick={props.plus}>+</button>
  </div>;

export default Counter;
