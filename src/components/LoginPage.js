import React from "react";
import { history } from "../router/AppRouter";

export const LoginPage = () => (
  <div>
    <h1>Login Page</h1>
    <button
      onClick={() => {
        history.push("/home");
      }}
    >
      Login
    </button>
  </div>
);

export default LoginPage;
