import React from 'react';
import classes from './input.module.css';

const Input = props => {
    return <div></div>
    <div
    className={`${classes.control} ${
      emailState.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor="email"> E - Mail </label>
    <input
      type="email"
      id="email"
      value={emailState.value}
      onChange={emailChangeHandler}
      onBlur={validateEmailHandler}
    />
  </div>;
};
export default Input;