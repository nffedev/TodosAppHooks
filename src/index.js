import React from "react";
import ReactDOM from "react-dom";

import { TodosApp } from "./Todos/TodosApp";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<TodosApp />, rootElement);
