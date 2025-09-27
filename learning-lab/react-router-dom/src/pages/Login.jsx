import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //? push user to dashboard !!
    navigate("/app/dashboard", { replace: true, state: "this is dummy data" });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

//? cart => Login => checkout
//? home => login (current entry will be replaced by dashboard) => dashboard
//^ ->       ->        *
//  *                 <-
//& home => dashboard
