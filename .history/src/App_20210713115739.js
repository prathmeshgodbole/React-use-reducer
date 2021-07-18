import React,{useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from '../.history/src/store/auth-context_20210713101820';


function App() {
 const ctx=useContext(AuthContext);

  return (
   <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </React.Fragment>
    
  );
}

export default App;
