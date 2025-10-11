import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClanChestInfo from "./pages/ClanChestInfo";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clan" element={<ClanChestInfo />} />
      </Routes>
    </>
  );
}

export default App;
