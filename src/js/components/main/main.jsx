import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { fetch } from "../../../api";
import Getmovie from "./get-movie";
import SearchComponent from "./search-component";

const Main = () => {
  const [vedio, setvedios] = useState([]);
  useEffect(() => {
    fetch("movie", "popular").then(({ data }) => {
      setvedios(data.results);
    });
  }, []);
  return (
    <Box>
      <SearchComponent />
      <Container>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          sx={{ overflowX: "scroll" }}
        >
          {vedio.map((item) => (
            <Box key={item.id}>{item.id && <Getmovie vedio={item} />}</Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Main;
