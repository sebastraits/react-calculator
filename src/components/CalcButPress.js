import React from "react";
import ResolverOp from "./ResolveOp";

const CalcButPress = (
  clase,
  valor,
  setValorVisorFirst,
  valorVisorFirst,
  setValorVisorOp,
  valorVisorOp,
  setValorVisorSecond,
  valorVisorSecond
) => {
  let setValorActual, valorActual;

  if (valorVisorOp == null) {
    setValorActual = setValorVisorFirst;
    valorActual = valorVisorFirst;
  } else {
    setValorActual = setValorVisorSecond;
    valorActual = valorVisorSecond;
  }

  if (clase === "calcOperator") {
    if (valor === "AC") {
      setValorVisorFirst("0");
      setValorVisorOp(null);
      setValorVisorSecond(null);
      return;
    }
    if (valor === "=") {
      if (valorVisorOp && valorVisorSecond) {
        setValorVisorFirst(
          `${ResolverOp(valorVisorFirst, valorVisorSecond, valorVisorOp)}`
        );
        setValorVisorOp(null);
        setValorVisorSecond(null);
        return;
      } else {
        return;
      }
    }

    if (valor === "+/-") {
      if (valorVisorSecond !== null) {
        setValorVisorSecond(`${ResolverOp(null, valorVisorSecond, valor)}`);
      } else {
        setValorVisorFirst(`${ResolverOp(valorVisorFirst, null, valor)}`);
      }
      return;
    }

    if (valor === "%") {
      setValorVisorFirst(
        `${ResolverOp(valorVisorFirst, valorVisorSecond, valorVisorOp + valor)}`
      );
      setValorVisorOp(null);
      setValorVisorSecond(null);
      return;
    }

    if (!valorVisorOp) {
      setValorVisorOp(`${valor}`);
    } else {
      if (valorVisorSecond) {
        setValorVisorFirst(
          `${ResolverOp(valorVisorFirst, valorVisorSecond, valorVisorOp)}`
        );
        setValorVisorOp(`${valor}`);
        setValorVisorSecond(null);
      }
    }
  }

  if (clase === "calcButton" || clase === "calcCero") {
    if (valorActual === "0" || valorActual === null) {
      if (valor === "0") {
        setValorActual("0");
      } else {
        if (valor === ".") {
          setValorActual(`${valorActual}${valor}`);
        } else {
          setValorActual(`${valor}`);
        }
      }
    } else {
      if (valor === ".") {
        if ([...valorActual].filter((x) => x === ".").length === 0) {
          setValorActual(`${valorActual}${valor}`);
        }
      } else {
        setValorActual(`${valorActual}${valor}`);
      }
    }
  }
};

export default CalcButPress;
