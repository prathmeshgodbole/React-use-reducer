import React,{useState,useEffect} from 'react';
const AuthContext = React.createContext(
    {
isLoggedIn:false,
onLogout:()=>{},
onLogin:(email,password)=>{}
    }
);

export const AuthContextProvider=(props)=>{
const [isLoggedin,setIsLoggedin]=useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  if (storedUserLoggedInInformation === "1") {
    setIsLoggedIn(true);
  }
}, []);

const LogoutHandler=()=>{
    localStorage.removeItem("isLoggedIn");
setIsLoggedin=false;
};

const LoginHandler=()=>{
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedin=true;
    };
return(
    <AuthContext.Provider>
value={{isLoggedIn:isLoggedIn,
onLogin:LoginHandler,
onLogout:LogoutHandler}}
    </AuthContext.Provider>
)

}
export default AuthContext;