import { useState, useEffect } from "react";

function Kalkulator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [hasil, setHasil] = useState(0);
  const [operator, setOperator] = useState("+");

  const handleChangeNum1 = (e) => {
    if (e.target) {
      setNum1(Number(e.target.value));
    }
  };

  const handleChangeNum2 = (e) => {
    if (e.target) {
      setNum2(Number(e.target.value));
    }
  };

  const handleChangeOperator = (e) => {
    if (e.target) {
      setOperator(e.target.value);
    }
  };

  useEffect(() => {
    if (operator === "+") {
      setHasil(num1 + num2);
    } else if (operator === "-") {
      setHasil(num1 - num2);
    } else if (operator === "*") {
      setHasil(num1 * num2);
    } else if (operator === "/") {
      setHasil(num1 / num2);
    }
  }, [num1, num2, operator]);

  return (
    <div className="container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Kalkulator">Kalkulator</a>
        </li>
      </ul>
      <input value={num1} onChange={handleChangeNum1} type="number" />
      <select className="m-2" value={operator} onChange={handleChangeOperator}>
        {["+", "-", "*", "/"]?.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
      <input value={num2} onChange={handleChangeNum2} type="number" />
      =
      <input className="m-1" value={hasil} disabled />
    </div>
  );
}

export default Kalkulator;
