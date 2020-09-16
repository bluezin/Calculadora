import React, { useState } from "react";
import "./App.css";
import gatito from "./imagenes/gatito.png";
import Buttons from "./Buttons";

function App() {
  const [firstNumber, setFirtsNumber] = useState([]);
  const [secondNumber, setSecondNumber] = useState([]);
  const [result, setResult] = useState({
    operator: "",
    resolucion: "",
  });

  const handleContent = () => {
    if (firstNumber.length === 0) {
      return null;
    } else {
      setSecondNumber([...secondNumber, firstNumber.join("")]);
    }
    setFirtsNumber("");
  };

  const handleRest = () => {
    handleContent();

    if (firstNumber.length !== 0) {
      const todo = [...secondNumber, firstNumber.join("")];
      const resultados = todo.reduce((a, b) => {
        return a - b;
      });
      setResult({ operator: "-", resolucion: resultados });
    }
  };

  const handleMultiplicacion = () => {
    handleContent();
    if (firstNumber.length !== 0) {
      const todo = [...secondNumber, firstNumber.join("")];
      const resultados = todo.reduce((a, b) => {
        return a * b;
      });
      setResult({ operator: "*", resolucion: resultados });
    }
  };
  const handleSum = () => {
    handleContent();
    if (firstNumber.length !== 0) {
      const todo = [...secondNumber, firstNumber.join("")];
      const resultados = todo.reduce((a, b) => {
        return a + b;
      });
      setResult({ operator: "+", resolucion: resultados });
    }
  };
  const handleDiv = () => {
    handleContent();
    if (firstNumber.length !== 0) {
      const todo = [...secondNumber, firstNumber.join("")];
      const resultados = todo.reduce((a, b) => {
        return a / b;
      });

      setResult({ operator: "/", resolucion: resultados });
    }
  };
  const handleResult = () => {
    handleContent();

    switch (result.operator) {
      case "*":
        handleMultiplicacion();
        // console.log(firstNumber.length);
        break;
      case "-":
        handleRest();
        break;
      case "/":
        handleDiv();
        break;
      case "+":
        handleSum();
      default:
        break;
    }
    setFirtsNumber("");
    setSecondNumber("");
  };

  return (
    <>
      <img
        className="img"
        src={gatito}
        style={{ position: "fixed", marginTop: -80 }}
      />
      <strong
        className="strong_2 img"
        style={{
          position: "fixed",
          color: "black",
          marginTop: -6,
          marginLeft: 14,
        }}
      >
        bluezin
      </strong>

      <div className="App">
        <Buttons
          handleResult={handleResult}
          handleDiv={handleDiv}
          handleSum={handleSum}
          handleRest={handleRest}
          handleMultiplicacion={handleMultiplicacion}
          firstNumber={firstNumber}
          setFirtsNumber={setFirtsNumber}
          resolucion={result.resolucion}
          setResult={setResult}
        />
      </div>
    </>
  );
}

export default App;
