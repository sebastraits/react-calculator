import React, { useState, useEffect } from "react";


const CalcButPress = (clase, valor, setValor, valorVisor, valorOperando) => {
  if (clase === "calcOperator") {
    if (valor === "AC") {
      setValor("0");
      return;
    }
    if (!valorOperando) {
      setValor(`${valor}`);
    } else {
      setValor(`${valor}`);
    }
  }

  if (clase === "calcButton" || clase === "calcCero") {
    console.log(valorVisor, valor);

    if (valorVisor === "0") {
      if (valor === "0") {
        setValor("0");
      } else {
        if (valor === ".") {
          setValor(`${valorVisor}${valor}`);
        } else {
          setValor(`${valor}`);
        }
      }
    } else {
      if (valor === ".") {
        console.log([...valorVisor].filter((x) => x === ".").length);
        if ([...valorVisor].filter((x) => x === ".").length === 0) {
          setValor(`${valorVisor}${valor}`);
        }
      } else {
        setValor(`${valorVisor}${valor}`);
      }
    }
  }
};

export default CalcButPress;
