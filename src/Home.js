import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home page!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atv01">Atividade 01</Link>
          </li>
          <li>
            <Link to="/Atv02">Atividade 02</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
