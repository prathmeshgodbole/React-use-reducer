import React,{useRef,useEffect} from 'react';
import classes from './input.module.css';

const Input = props => {
const InputRef=useRef();
const 

    return (
    <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor={props.id}> {props.lable} </label>
    <input
    ref={InputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  
  </div>);
};
export default Input;