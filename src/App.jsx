import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//components
import Header from "./components/Header";

//pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/comics/:id" element={<Comics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
