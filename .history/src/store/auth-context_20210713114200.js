import React,{useState} from 'react';
const AuthContext = React.createContext(
    {
isLoggedIn:false,
onLogout:()=>{},
onLogin:(email,password)=>{}
    }
);
export AuthContextProvider=(props)=>{
const [isLoggedin,setIsLoggedin]=useState(false);

const LogoutHandler=()=>{
setIsLoggedin=false;
};

const LoginHandler=()=>{
    setIsLoggedin=true;
    };
return(
    <AuthContext.Provider>
        
    </AuthContext.Provider>
)

}
export default AuthContext;