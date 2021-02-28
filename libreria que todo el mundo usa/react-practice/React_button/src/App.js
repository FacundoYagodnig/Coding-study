import React from "react";
import { render } from "react-dom";
import "./style.css";
import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;

render(React.createElement(App), document.getElementById("root"));
