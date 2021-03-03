/* import React from 'react';
import '../assets/styles/Login.css'

function Login() {
  return(
    <div className="Log_in">
        <div className="icon-color">
          <input type="text" placeholder="name" name="name" />
        </div>
        <div className="icon-color">
          <input type="password" placeholder="password" name="password" />
          </div>
        <button>Login</button>
    </div>
  )
}
export default Login; */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
