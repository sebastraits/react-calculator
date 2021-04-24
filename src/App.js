import logo from "./logo.svg";
import "./App.css";
import CalcButton from "./components/CalcButton";
import React, { useEffect, useState } from "react";

function App() {
  const [valorVisor, setValorVisor] = useState("0");
  const [valorOperando, setValorOperando] = useState(null);

  let display = "calcDisplay",
    button = "calcButton",
    operator = "calcOperator";

  function mySuma(total, num) {
    return parseFloat(total) + parseFloat(num);
  }

  useEffect(() => {
    var res = valorVisor.split("+");
    if (res.length > 1) {
      // console.log(res[0], res[1], res.reduce(myFunc))

      setValorVisor(`${res.reduce(mySuma)}${(valorOperando === "=" ? "": valorOperando)}`);
    } else {
      valorOperando && setValorVisor(`${valorVisor}${valorOperando}`);
    }


  }, [valorOperando]);

  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="calculatorBody">
        <CalcButton
          clase={display}
          valor={valorVisor}
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={operator}
          valor="AC"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={operator}
          valor="+/-"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={operator}
          valor="%"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={operator}
          valor="÷"
          setValor={setValorOperando}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />

        <CalcButton
          clase={button}
          valor="7"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={button}
          valor="8"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={button}
          valor="9"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={operator}
          valor="x"
          setValor={setValorOperando}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />

        <CalcButton
          clase={button}
          valor="4"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={button}
          valor="5"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={button}
          valor="6"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={operator}
          valor="-"
          setValor={setValorOperando}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />

        <CalcButton
          clase={button}
          valor="1"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={button}
          valor="2"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={button}
          valor="3"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={operator}
          valor="+"
          setValor={setValorOperando}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />

        <CalcButton
          clase="calcCero"
          valor="0"
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={button}
          valor="."
          setValor={setValorVisor}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
        <CalcButton
          clase={operator}
          valor="="
          setValor={setValorOperando}
          valorVisor={valorVisor}
          valorOperando={valorOperando}
        />
      </div>
    </div>
  );
}

export default App;
