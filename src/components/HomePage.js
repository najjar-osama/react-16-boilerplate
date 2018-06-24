import React from "react";
import { history } from "../router/AppRouter";

export const HomePage = () => (
  <div>
    <h1>Home Page!</h1>
    <button
      onClick={() => {
        history.push("/");
      }}
    >
      Logout
    </button>
  </div>
);

export default HomePage;
