import React,{useRef,useEffect} from 'react';
import classes from './input.module.css';

const Input = props => {
const Input

    return (
    <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor={props.id}> {props.lable} </label>
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  
  </div>);
};
export default Input;