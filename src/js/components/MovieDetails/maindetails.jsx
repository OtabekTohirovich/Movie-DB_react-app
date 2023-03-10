import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  Login,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchMovieVedio } from "../../../api";
import config from "../../../configs";
import { collors } from "../../../constants/color";
import Progress from "../main/searclular-progress";
const Maindetails = ({ vediodetail }) => {
  const { id } = useParams();
  const [media, setmedia] = useState();
  const [start, setstart] = useState(false);
  useEffect(() => {
    fetchMovieVedio("movie", id).then(({ data }) => {
      setmedia(data?.results[0]);
    });
  }, []);

  const handlerVedio = () => {
    setstart(!start);
  };

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
        boxShadow: `${
          start
            ? "inset 3000px 3000px 8000px #fff432"
            : "inset 3000px 3000px 8000px #403636d9"
        }`,
        width: "100%",
        height: "92vh",
      }}
    >
      <Container>
        <Stack direction={"row"} sx={{ margin: "100px 0" }}>
          <Box>
            {start ? (
              ""
            ) : (
              <CardMedia
                image={config.baseImgURL + vediodetail?.poster_path}
                alt={vediodetail.title}
                sx={{
                  width: "350px",
                  height: "550px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  display: "flex",
                }}
              />
            )}
          </Box>
          <Box
            sx={{
              margin: "100px 50px",
              color: collors.white,
              position: "relative",
            }}
          >
            <Typography
              variant="p"
              fontWeight={"700"}
              sx={{ color: "#fff", fontSize: "35px" }}
            >
              {vediodetail.title}
            </Typography>
            <Stack
              direction={"row"}
              sx={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <div
                style={{
                  background: collors.mainBlue,
                  padding: "6px",
                  borderRadius: "30px",
                  width: "48px",
                  height: "48px",
                  transform: "scale(1.3)",
                }}
              >
                <Progress vote_average={vediodetail?.vote_average} />
              </div>

              <Typography
                width={"22px"}
                sx={{
                  margin: "10px",
                  fontWeight: "bold",
                  color: collors.white,
                }}
              >
                User Score
              </Typography>
              <div
                style={{
                  background: collors.mainBlue,
                  borderRadius: "50px",
                  padding: "10px",
                }}
              >
                <Rating name="half-rating" defaultValue={0} precision={0.5} />
              </div>

              <div
                style={{
                  background: collors.mainBlue,
                  borderRadius: "50px",
                  padding: "3px",
                }}
              >
                <Checkbox
                  icon={<FavoriteBorder sx={{ color: collors.white }} />}
                  checkedIcon={<Favorite sx={{ color: "#ef47b6" }} />}
                />
              </div>
              <div
                style={{
                  background: collors.mainBlue,
                  borderRadius: "50px",
                  padding: "3px",
                }}
              >
                <Checkbox
                  icon={<BookmarkBorder sx={{ color: collors.white }} />}
                  checkedIcon={<Bookmark sx={{ color: "#cf3131" }} />}
                />
              </div>
            </Stack>
            <Typography variant="h5" marginTop={"30px"} fontWeight={"bold"}>
              {vediodetail?.release_date}
            </Typography>
            <Typography marginTop={"10px"} fontWeight={"bold"}>
              {vediodetail?.status}
            </Typography>
            {media ? (
              <Button
                onClick={handlerVedio}
                variant="outlined"
                sx={{ color: "#fff", borderColor: "#fff", marginTop: "40px" }}
              >
                Show vedio
              </Button>
            ) : (
              ""
            )}

            {start ? (
              <Box>
                <ReactPlayer
                  style={{
                    position: "absolute",
                    top: "5%",
                    left: "-35%",
                    zIndex: 1,
                  }}
                  url={`https://www.youtube.com/watch?v=${media?.key}`}
                  controls
                />
                <Button
                  onClick={handlerVedio}
                  sx={{
                    position: "absolute",
                    top: "-5%",
                    right: "-35%",
                    padding: "3px 0",
                  }}
                >
                  <Login />
                </Button>
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Maindetails;
