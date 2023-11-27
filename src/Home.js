import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="App">Home page!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atv01">Relógio e Letreiro (Atividade 01)</Link>
          </li>
          <li>
            <Link to="/Atv02">NÃO REALIZADA! (Atividade 02)</Link>
          </li>
          <li>
            <Link to="/Atv03">NÃO REALIZADA! (Atividade 03)</Link>
          </li>
          <li>
            <Link to="/Atv04">Calculadora IOS (Atividade 04)</Link>
          </li>
          <li>
            <Link to="/Atv05">Jogo da Memória (Atividade 05)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
