import { Link } from "react-router-dom";
import Watch from "./Components/Watch/Watch";
import AnimatedPhrase from "./Components/AnimatedPhrase/AnimatedPhrase";

export default function Atv01() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <h1>Relógio e Letreiro</h1>
      <Watch />
      <AnimatedPhrase phrase={"Venha estudar na FATEC!"} />
    </div>
  );
}
