import React,{useState} from 'react';
const AuthContext = React.createContext(
    {
isLoggedIn:false,
onLogout:()=>{},
onLogin:(email,password)=>{}
    }
);
export AuthContextProvider=(props)=>{
useState()
}
export default AuthContext;