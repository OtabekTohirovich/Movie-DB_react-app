import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { fetch } from "../../../api";
import { category, categorytrend } from "../../../constants";
import Category from "./category";
import Getmovie from "./get-movie";
import SearchComponent from "./search-component";
import Treanding from "./treanding";
import Walpaper from "./Walpaper";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("movie");
  const [selectedCategorys, setSelectedCategorys] = useState("movie");
  const [vedio, setvedios] = useState([]);
  const [vediotrend, setvediotreand] = useState([]);
  const selectedCategoryHandelar = (category) => setSelectedCategory(category);
  const selectedTreandHandelar = (categorytrend) =>
    setSelectedCategorys(categorytrend);

  useEffect(() => {
    fetch(selectedCategory, "popular").then(({ data }) => {
      setvedios(data.results);
    });
    fetch(selectedCategorys, "popular").then(({ data }) => {
      setvediotreand(data.results);
    });
  }, []);

  useEffect(() => {
    fetch(selectedCategory, "popular").then(({ data }) => {
      setvedios(data.results);
    });
  }, [selectedCategory]);

  useEffect(() => {
    fetch(selectedCategorys, "popular").then(({ data }) => {
      setvediotreand(data.results);
    });
  }, [selectedCategorys]);
  return (
    <Box>
      <SearchComponent />
      <Walpaper />
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
          sx={{ overflowX: "scroll", height: "385px" }}
        >
          {vedio.map((item) => (
            <Box key={item.id}>{item.id && <Getmovie vedio={item} />}</Box>
          ))}
        </Stack>
      </Container>
      <Treanding
        vedio={vediotrend}
        selectedCategorys={selectedCategorys}
        category={categorytrend}
        selectedCategory={selectedCategorys}
        selectedCategoryHandelar={selectedTreandHandelar}
      />
    </Box>
  );
};

export default Main;
