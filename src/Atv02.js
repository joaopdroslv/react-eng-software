import { Link } from "react-router-dom";
import AnimatedPhrase from "./Components/AnimatedPhrase/AnimatedPhrase";

export default function Atv02() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <h1>Letreiro</h1>
      <AnimatedPhrase phrase={"Venha estudar na FATEC!"} />
    </div>
  );
}
