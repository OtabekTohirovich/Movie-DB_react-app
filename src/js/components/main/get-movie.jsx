import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import config from "../../../configs";
import moment from "moment";
import Progress from "./searclular-progress";
import { collors } from "../../../constants/color";
import Elpises from "./elpises";
const Getmovie = ({ vedio }) => {

  return (
    <Card
      sx={{
        margin: "10px",
        position: "relative",
        border: "none",
        boxShadow: "none",
      }}
      id={vedio.id}
    >
      <Link to={`/movie/${vedio.id}`}>
        <CardMedia
          image={config.baseImgURL + vedio.poster_path}
          alt={vedio.title}
          sx={{
            width: "145px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </Link>
      <div style={{ position: "absolute", top: "8px", right: "8px" }}>
        <Elpises />
      </div>
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "15px",
          background: collors.mainBlue,
          padding: "6px",
          borderRadius: "30px",
        }}
      >
        <Progress vote_average={vedio.vote_average} />
      </div>

      <CardContent>
        <Link to={`/movie/${vedio.id}`}>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {vedio.title ? vedio.title.slice(0, 30) : vedio.name.slice(0, 30)}
          </Typography>
        </Link>
        <Typography
          sx={{
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            marginTop: "4px",
          }}
        >
          {vedio.first_air_date
            ? `${
                vedio.first_air_date
                  ? vedio.first_air_date
                  : moment().format("DD-MM-YYYY")
              }`
            : `${
                vedio.release_date
                  ? vedio.release_date
                  : moment().format("YYYY-MM-DD")
              }`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Getmovie;
