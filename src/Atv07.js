import { Link } from "react-router-dom";
import Cards from "./Components/MemoryGame/Cards.jsx";

function App() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <h1>Jogo da Memória</h1>
      <Cards />
    </div>
  );
}

export default App;
