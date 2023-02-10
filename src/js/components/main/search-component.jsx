import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { collors } from "../../../constants/color"

const SearchComponent = () => {
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
        backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/2Sm3asuwKVNTzgm2nF6hp5mwEfh.jpg")`,
      }}
    >
      <Container>
        <Stack direction={"column"}>
          <Typography
            variant={"h3"}
            fontWeight={"bold"}
            sx={{ color: collors.white, marginTop: "80px" }}
          >
            Welcome.
          </Typography>
          <Typography
            variant={"h5"}
            fontWeight={"bold"}
            sx={{ color: collors.white, marginTop: "5px" }}
          >
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
          <Box marginTop='55px'>
            <input className="searchForm" type="text" name="search" placeholder="Search for a movie, tv show, person......" />
            <Button className="btnSearch"  sx={{padding: '10px 20px', marginLeft:'-10%',marginTop: '-0.3px', borderRadius: '30px', background: 'linear-gradient(to left,#01b4e3,#1ed5a9)', width: '10%',  fontSize: '11.5px', fontWeight:'bold',color: collors.white }}>Search</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default SearchComponent