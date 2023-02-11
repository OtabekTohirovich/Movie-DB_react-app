import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { fetch } from "../../../api";
import { category } from "../../../constants";
import Category from "./category";
import Getmovie from "./get-movie";
import SearchComponent from "./search-component";


const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("movie");
  const [vedio, setvedios] = useState([]);
  const selectedCategoryHandelar = (category) => setSelectedCategory(category);

  useEffect(() => {
    fetch(selectedCategory, "popular").then(({ data }) => {
      setvedios(data.results);
    });
  }, []);

  useEffect(() => {
    fetch(selectedCategory, "popular").then(({ data }) => {
      setvedios(data.results);
    });
  }, [selectedCategory]);
  return (
    <Box>
      <SearchComponent />
      <Container>
        <Category
          selectedCategoryHandelar={selectedCategoryHandelar}
          selectedCategory={selectedCategory}
          category={category}
        />
        <Stack
          className="scrollMovie"
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
