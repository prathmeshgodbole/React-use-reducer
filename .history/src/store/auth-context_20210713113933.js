import React,{useState} from 'react';
const AuthContext = React.createContext(
    {
isLoggedIn:false,
onLogout:()=>{},
onLogin:(email,password)=>{}
    }
);
export AuthContextProvider=(props)=>{
const [isLogged]=useState(false);
}
export default AuthContext;