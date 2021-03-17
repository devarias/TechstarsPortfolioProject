import React from "react";

function Survey() {
  return (
    <div className="loginForm">
      <h3>Holberton Email</h3>
      <input className="box" type="text" placeholder="Email" />
      <br />
      <h3>Password</h3>
      <input className="box" type="password" placeholder="Password" />
      <br />
      <h3>Api Key</h3>
      <input className="box" type="text" placeholder="Api Key" />
      <br />
    </div>
  );
}
export default Survey;
