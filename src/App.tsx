import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Grid from "./Grid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
