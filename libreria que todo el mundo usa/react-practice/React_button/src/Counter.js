import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const [changeText, setchangeText] = useState(null);
  ("Error");

  const handlerAdd = () => {
    setCounter((n) => n + 1);
  };

  const handlerSubstract = () => {
    if (counter >= 1) {
      setCounter((n) => n - 1);
    } else {
      setchangeText("Hasta aca llegaste maquina");
    }
  };

  const removeError = () => {
    setchangeText(null);
  };

  return (
    <div>
      <div className="counter">
        <div>
          <button type="button" className="button" onClick={handlerSubstract}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div className="number-counter"> {counter} </div>
        <div>
          <button type="button" className="button" onClick={handlerAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      {changeText && (
        <div style={{ margin: "20px" }} className="text">
          <center>
            <button type="button" className="button" onClick={removeError}>
              QUITAR ERROR
            </button>
            <p style={{ color: "white" }}>{changeText}</p>
          </center>
        </div>
      )}
    </div>
  );
};

export default Counter;
