import { Link } from "react-router-dom";
import MemoryGame from "./Components/MemoryGame/MemoryGame.jsx";

export default function Atv07() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <h1>Jogo da Memória</h1>
      <MemoryGame />
    </div>
  );
}
