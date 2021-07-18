import React from 'react';
import classes from './input.module.css';

const Input = props => {
    return <div>
    <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ""
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
  </div>
  </div>;
};
export default Input;