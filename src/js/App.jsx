import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import { Navbar, Main } from "./components";

function App() {
  return (
    <Box>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/search/:id" element={<Search />} /> */}
      </Routes>
    </Box>
  );
}

export default App;
