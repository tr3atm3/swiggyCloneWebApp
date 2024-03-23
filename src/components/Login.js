import React, { useState } from "react";

const Login = () => {
  const [userWantToLogin, setUserWantToLogin] = useState(true);
  const handleUserWantTo = () => {
    setUserWantToLogin((prev) => !prev);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <h1>{userWantToLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="username" />
        {!userWantToLogin && <input type="email" placeholder="email" />}
        <input type="password" placeholder="password" />
        <button>{userWantToLogin ? "Login" : "Sign Up"}</button>
      </form>
      <div className="login-footer">
        <p>
          {userWantToLogin
            ? "Dont have an Account?"
            : "Already Have an Account?"}
        </p>
        <p className="loginOrSignUp" onClick={handleUserWantTo}>
          {userWantToLogin ? "Sign Up" : "Login"}
        </p>
      </div>
    </div>
  );
};

export default Login;
