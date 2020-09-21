import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const state = {
  type: "div",
  name: "Clock",
  root: true,
  style: {
    display: "flex",
    "flex- direction": "row",
    "justify- content": "center",
  },
  children: [
    {
      type: "div",
      name: "Hour",
      style: {},
      children: [],
    },
    {
      type: "span",
      name: "Minute",
      style: {
        color: "green",
        "font- size": 30,
      },
      children: [],
    },
  ],
};

const Component = React.createElement(
  state.type,
  { style: state.style },
  state.name,
  state.children.map((child, key) =>
    React.createElement(child.type, { style: child.style }, child.name)
  )
);

ReactDOM.render(Component, document.getElementById("root"));
serviceWorker.unregister();
