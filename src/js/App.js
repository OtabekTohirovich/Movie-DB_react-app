import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import { Navbar, Main } from "./components";

function App() {
  return (
    <Box>
      <Navbar />
      <Container fixed >
        <Routes>
           <Route />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
