import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import config from "../../../configs";

const Getmovie = ({ vedio }) => {
  console.log(vedio);
  
  return (
      <Card sx={{margin: '10px'}}>
        <CardHeader>
        </CardHeader>
          <CardMedia
            image={config.baseImgURL + vedio.poster_path}
            alt={vedio.title}
            sx={{
              width: '145px',
              height: "220px",
              objectFit: "cover",
            }}
          />
        <CardContent>
          <Typography>{vedio.title}</Typography>
        </CardContent>
      </Card>
  );
};

export default Getmovie;
