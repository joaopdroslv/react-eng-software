import { Link } from "react-router-dom";
import Cards from "./Components/MemoryGame/Cards.jsx";

export default function Atv07() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <h1>Jogo da Memória</h1>
      <Cards />
    </div>
  );
}
