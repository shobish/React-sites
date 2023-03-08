import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
