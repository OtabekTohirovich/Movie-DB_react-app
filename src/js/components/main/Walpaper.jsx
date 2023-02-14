import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { collors } from "../../../constants/color";
import { ArrowRightAlt} from "@mui/icons-material";

const Walpaper = () => {
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
        backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/rGbRnRvkmrSub07ty89Vnlsh6UX.jpg")`,
      }}
    >
      <Container>
        <Stack direction={"column"}>
          <Typography
            variant={"h2"}
            fontWeight={"bold"}
            sx={{
              color: collors.white,
              marginTop: "60px",
              width: "30%",
              borderBottom: "1px solid",
            }}
          >
            THAT'S A WRAP 2022
          </Typography>
          <Typography
            sx={{
              color: collors.white,
              marginTop: "10px",
              width: "30%",
            }}
          >
            The best (and worst) from 2022.
          </Typography>

          <Button sx={{width: "150px", border: "2px solid" , color: collors.white,marginTop: "10px", borderRadius: '50px'}}>Contact me <ArrowRightAlt/> </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Walpaper;
