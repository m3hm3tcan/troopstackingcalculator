import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ClanChestInfo from "./pages/ClanChestInfo";
// import ChestCollector from "./pages/ChestCollector";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/clan-chest-info" element={<ClanChestInfo />} />
        <Route path="/clan-chest-collector" element={<ChestCollector />} /> */}
      </Routes>
    </>
  );
}

export default App;
