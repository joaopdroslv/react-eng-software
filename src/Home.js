import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home page!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atv01">Relógio (Atividade 01)</Link>
          </li>
          <li>
            <Link to="/Atv02">Letreiro (Atividade 02)</Link>
          </li>
          <li>
            <Link to="/Atv03">Atividade 03 (NÃO REALIZADA)</Link>
          </li>
          <li>
            <Link to="/Atv04">Atividade 04 (NÃO REALIZADA)</Link>
          </li>
          <li>
            <Link to="/Atv05">Atividade 05 (NÃO REALIZADA)</Link>
          </li>
          <li>
            <Link to="/Atv06">Atividade 06 (NÃO REALIZADA)</Link>
          </li>
          <li>
            <Link to="/Atv07">Jogo da Memória (Atividade 07)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
