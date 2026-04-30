import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ClanChestInfo from "./pages/ClanChestInfo";
import KriptoInfo from "./pages/KriptoInfo";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/clan" element={<ClanChestInfo />} /> */}
        {/* <Route path="/kriptoInfo" element={<KriptoInfo />} /> */}
      </Routes>
    </>
  );
}

export default App;
