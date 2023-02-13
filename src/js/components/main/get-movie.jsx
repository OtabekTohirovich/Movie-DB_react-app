import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import config from "../../../configs";
const Getmovie = ({ vedio }) => {
  
  return (
    <Card sx={{ margin: "10px", position: "relative" }} id={vedio.id}>
      <Link to={`/movie/${vedio.id}`}>
        <CardMedia
          image={config.baseImgURL + vedio.poster_path}
          alt={vedio.title}
          sx={{
            width: "145px",
            height: "220px",
            objectFit: "cover",
          }}
        />
      </Link>
      
      <CardContent>
        <Typography>{vedio.title ? vedio.title : vedio.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default Getmovie;

{/*
const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
<div onClick={handleExpandClick}>
        <GraphicEq
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
            color: collors.mainBlue,
            zIndex: 1,
          }}
        />
      </div>
      <Collapse
        in={expanded}
        timeout="auto"
        sx={{
          position: "absolute",
          top: "10px",
          right: "0",
          bgcolor: collors.white,
          zIndex: 5,
        }}
      >
        <Typography paragraph>Method:</Typography>
      </Collapse> */}