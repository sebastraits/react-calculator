import React, { useState, useEffect } from "react";
import CalcButPress from "./CalcButPress";

const buttonPress = (clase, valor, setValor, valorVisor, valorOperando) => {
    let procesar = CalcButPress(clase, valor, setValor, valorVisor, valorOperando);
  };

const CalcButton = ({ clase, valor, setValor, valorVisor, valorOperando }) => {
  
    
   

  return (
    <div
      className={clase}
      onClick={() => {
        buttonPress(clase, valor, setValor, valorVisor, valorOperando);
      }}
    >
      {valor}
    </div>
  );
};

export default CalcButton;
