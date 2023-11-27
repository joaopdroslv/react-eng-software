import { Link } from "react-router-dom";
import Watch from "./Components/Watch/Watch";

export default function Atv01() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <h1>Relógio</h1>
      <Watch />
    </div>
  );
}
