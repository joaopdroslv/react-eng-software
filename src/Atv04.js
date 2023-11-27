import { Link } from "react-router-dom";
import Calculator from "./Components/Calculator/Calculator.jsx";

export default function Atv06() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <h1>Calculadora</h1>
      <Calculator />
    </div>
  );
}
