import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home.js";
import Atv01 from "./Atv01.js";
import Atv02 from "./Atv02.js";
import Atv03 from "./Atv03.js";
import Atv04 from "./Atv04.js";
import Atv05 from "./Atv05.js";
import Atv06 from "./Atv06.js";
import Atv07 from "./Atv07.js";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atv01" element={<Atv01 />} />
        <Route path="/Atv02" element={<Atv02 />} />
        <Route path="/Atv03" element={<Atv03 />} />
        <Route path="/Atv04" element={<Atv04 />} />
        <Route path="/Atv05" element={<Atv05 />} />
        <Route path="/Atv06" element={<Atv06 />} />
        <Route path="/Atv07" element={<Atv07 />} />
      </Routes>
    </BrowserRouter>
  );
}
