import { Link } from "react-router-dom";

export default function Atv02() {
  return (
    <div>
      <h1>Letreiro</h1>
      <Link to="/">Home page</Link>
      <AnimatedPhrase {"Venha estudar na FATEC!"} />
    </div>
  );
}
