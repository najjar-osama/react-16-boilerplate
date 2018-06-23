import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//check
//console.log(process.env.REACT_APP_SECRET_CODE);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
