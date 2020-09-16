import React from "react";
import "./App.css";

const Buttons = ({
  handleMultiplicacion,
  handleDiv,
  handleRest,
  handleResult,
  handleSum,
  firstNumber,
  setFirtsNumber,
  resolucion,
  setResult,
}) => {
  return (
    <>
      <div className="h1">
        {firstNumber.length > 13 ? (
          <h1 className="h1_text">{firstNumber || resolucion}</h1>
        ) : (
          <h1>{firstNumber || resolucion}</h1>
        )}
      </div>
      <div className="row">
        <strong
          className="strong"
          style={{ float: "left" }}
          onClick={() => {
            setFirtsNumber("");
            setResult("");
          }}
        >
          x
        </strong>
        <div className="content">
          <button
            value="1"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            1
          </button>
          <button
            value="2"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            2
          </button>
          <button
            value="3"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            3
          </button>
          <button
            value="4"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            4
          </button>
          <button
            value="5"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            5
          </button>
          <button
            value="6"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            6
          </button>
          <button
            value="7"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            7
          </button>
          <button
            value="8"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            8
          </button>
          <button
            value="9"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            9
          </button>
          <button
            className="cero"
            value="0"
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            0
          </button>
          <button
            value="."
            onClick={(event) => {
              setFirtsNumber([...firstNumber, event.target.value]);
            }}
          >
            .
          </button>
          <div className="col">
            <button
              style={{ backgroundColor: " #757575" }}
              onClick={handleMultiplicacion}
            >
              x
            </button>
            <button onClick={handleDiv} style={{ backgroundColor: " #757575" }}>
              ÷
            </button>
            <button
              onClick={handleRest}
              style={{ backgroundColor: " #757575" }}
            >
              -
            </button>
            <button onClick={handleSum} style={{ backgroundColor: "#757575" }}>
              +
            </button>
            <button
              className="igual"
              onClick={handleResult}
              style={{ backgroundColor: "#558B2F" }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
