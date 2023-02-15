import { Box, Container, Stack } from "@mui/material";
import Category from "./category";
import GetMovieVedio from "./getmovie-vedio";

const Treanding = ({selectedCategoryHandelar, vedio, category, selectedCategory}) => {
  return (
    <Box
      margin={"auto"}
      width={{ xs: "100%", sm: "100%", lg: "100%", xl: "65%" }}
      height={"350px"}
      sx={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/fJHUv0stNG1XDvHvgyiBVu2auMq.jpg")`,
        // opacity: "0.5"
      }}
    >
      <Container>
        <Category
          selectedCategoryHandelar={selectedCategoryHandelar}
          selectedCategory={selectedCategory}
          category={category}
          name={"Latest Trailers"}
        />
        <Stack
          className="scrollMovie"
          display={"flex"}
          flexDirection={"row"}
          sx={{ overflowX: "scroll", height: "285px"}}
        >
          {vedio.map((item) => (
            <Box key={item.id}>{item.id && <GetMovieVedio vedio={item} />}</Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Treanding;
