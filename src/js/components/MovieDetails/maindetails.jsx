import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import config from "../../../configs";
import { collors } from "../../../constants/color";
import Progress from "../main/searclular-progress";
const Maindetails = ({ vediodetail }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        backgroundImage: `url(${
          config.baseImgURL + vediodetail.backdrop_path
        })`,
        backgroundPositionX: "left",
        backgroundPositionY: "center",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "inset 3000px 3000px 8000px #403636d9",
      }}
    >
      <Container>
        <Stack direction={"row"}>
          <Box>
            <CardMedia
              image={config.baseImgURL + vediodetail.poster_path}
              alt={vediodetail.title}
              sx={{
                width: "350px",
                height: "450px",
                objectFit: "cover",
                borderRadius: "15px",
                margin: "30px 0",
              }}
            />
          </Box>
          <Box sx={{ padding: "45px 30px" }}>
            <Typography
              variant="p"
              fontWeight={"700"}
              sx={{ color: "#fff", fontSize: "35px" }}
            >
              {vediodetail.title}
            </Typography>
            <div
              style={{
                background: collors.mainBlue,
                padding: "6px",
                borderRadius: "30px",
                width: "48px",
                transform: "scale(1.4)"
              }}
            >
              <Progress vote_average={vediodetail.vote_average} />
            </div>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Maindetails;
