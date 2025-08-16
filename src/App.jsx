import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState("");

  const btnClick = () => {
    let table = [];
    for (let i = 1; i <= 10; i++) {
      const multi = number * i;
      table.push(`${i} * ${number} = ${multi} \n`);
    }
    setResult(table);
  };

  const btnReset = () => {
    setNumber();
    setResult([]);
  };

  return (
    <>
      <div style={{minHeight:"100vh"}} className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <div className="card p-4">
              <div className="title">
                <h2 className="text-center fw-bold">
                  Multiplication Table
             
                </h2>
              </div>
              <hr />
              <input
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Enter the number.."
              />

              <div className="btns mt-4 d-flex justify-content-around">
                <button onClick={btnClick} className="btn btn-primary fw-bold rounded-pill px-4">
                  Multiplication
                </button>
                <button onClick={btnReset} className="btn btn-dark fw-bold rounded-pill px-4">
                  Reset
                </button>
              </div>

              <hr />
              <div style={{ whiteSpace: "pre-line", alignContent:"justify" }} className="result text-dark">
                <p className=" text-center fw-semibold fs-5">
                  {result}
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
