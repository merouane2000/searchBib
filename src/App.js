import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import OurProject from "./components/OurProject";
import Members from "./components/Members";
import Li from "./components/Li";
import Lc from "./components/Lc";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/ourproject" element={<OurProject />} />
        <Route path="/members" element={<Members />} />
        <Route path="/li" element={<Li />} />
        <Route path="/lc" element={<Lc />} />
      </Routes>
    </Router>
  );
}

export default App;
