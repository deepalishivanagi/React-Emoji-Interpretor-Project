import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App2 from "./App";
//import {App2} from "./App"; -->This will take that perticular function if {} not used then it will take default one

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App2 />
  </StrictMode>,
  rootElement
);
