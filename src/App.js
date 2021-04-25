import "./App.css";
import CalcButton from "./components/CalcButton";
import React, { useEffect, useState } from "react";

function App() {
  const [valorVisorFirst, setValorVisorFirst] = useState("0");
  const [valorVisorOp, setValorVisorOp] = useState(null);
  const [valorVisorSecond, setValorVisorSecond] = useState(null);

  let display = "calcDisplay",
    button = "calcButton",
    operator = "calcOperator";

    useEffect(() => {
    if (valorVisorFirst === "Op.inválida") {
      setTimeout(() => {
        setValorVisorFirst("0");
        setValorVisorOp(null);
        setValorVisorSecond(null);
      }, 3000);
    }
  }, [valorVisorFirst]);

  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="calculatorBody">
        <CalcButton
          clase={display}
          valor={`${valorVisorFirst} ${valorVisorOp ? valorVisorOp : ""} ${
            valorVisorSecond ? valorVisorSecond : ""
          }`}
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={operator}
          valor="AC"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={operator}
          valor="+/-"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={operator}
          valor="%"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={operator}
          valor="÷"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />

        <CalcButton
          clase={button}
          valor="7"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={button}
          valor="8"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={button}
          valor="9"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={operator}
          valor="x"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />

        <CalcButton
          clase={button}
          valor="4"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={button}
          valor="5"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={button}
          valor="6"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={operator}
          valor="-"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />

        <CalcButton
          clase={button}
          valor="1"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={button}
          valor="2"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={button}
          valor="3"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={operator}
          valor="+"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />

        <CalcButton
          clase="calcCero"
          valor="0"
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={button}
          valor="."
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
        <CalcButton
          clase={operator}
          valor="="
          setValorVisorFirst={setValorVisorFirst}
          valorVisorFirst={valorVisorFirst}
          setValorVisorOp={setValorVisorOp}
          valorVisorOp={valorVisorOp}
          setValorVisorSecond={setValorVisorSecond}
          valorVisorSecond={valorVisorSecond}
        />
      </div>
    </div>
  );
}

export default App;
