import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = (props) => {
  
  return (
    <AuthContext.Consumer>
    {{ctx}=>{
      return()
      
    }}
  </AuthContext.Consumer>
    
  );
};

export default Navigation;
