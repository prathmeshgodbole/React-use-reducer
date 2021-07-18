import React,{useContext} from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import authContext from '../../../.history/src/store/auth-context_20210713101645';

const Navigation = (props) => {
  const ctx=useContext(authContext);
  return (
    <AuthContext.Consumer>
      
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        
    </AuthContext.Consumer>
  );
};

export default Navigation;
