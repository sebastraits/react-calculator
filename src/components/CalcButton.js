import React from "react";
import CalcButPress from "./CalcButPress";

const CalcButton = ({
  clase,
  valor,
  setValorVisorFirst,
  valorVisorFirst,
  setValorVisorOp,
  valorVisorOp,
  setValorVisorSecond,
  valorVisorSecond,
}) => {
  return (
    <div
      className={clase}
      onClick={() => {
        CalcButPress(
          clase,
          valor,
          setValorVisorFirst,
          valorVisorFirst,
          setValorVisorOp,
          valorVisorOp,
          setValorVisorSecond,
          valorVisorSecond
        );
      }}
    >
      {valor}
    </div>
  );
};

export default CalcButton;
