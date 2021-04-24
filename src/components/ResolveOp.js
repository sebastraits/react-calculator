import React from "react";

const ResolverOp = (valor1, valor2, operando) => {
  let resultado;
  if (operando === "+") {
    resultado = parseFloat(valor1) + parseFloat(valor2);
  }
  if (operando === "-") {
    resultado = parseFloat(valor1) - parseFloat(valor2);
  }

  if (operando === "x") {
    resultado = parseFloat(valor1) * parseFloat(valor2);
  }

  if (operando === "÷") {
    resultado = parseFloat(valor1) / parseFloat(valor2);
  }

  if (operando === "+/-") {
    let miValor = "";
    valor2 ? miValor = valor2: miValor = valor1;
    
    resultado =- miValor;
  }

  if (operando === "null%") {
      resultado = parseFloat(valor1) / 100
  }

  if (operando === "+%") {
resultado = parseFloat(valor1) + (parseFloat(valor2) / 100)
  }

  if (operando === "-%"){
    resultado = parseFloat(valor1) - (parseFloat(valor2) / 100)
  }

  if (operando === "÷%"){
    resultado = parseFloat(valor1) / (parseFloat(valor2) / 100)
  }
  if (operando === "x%"){
    resultado = parseFloat(valor1) * (parseFloat(valor2) / 100)
  }



  if (isNaN(resultado)) {
    return "Op.inválida";
  } else {
    let resultadoFinal;
    Number.isInteger(resultado)
      ? (resultadoFinal = resultado)
      : (resultadoFinal = parseFloat(resultado.toFixed(8)));
    return resultadoFinal;
  }
};

export default ResolverOp;
