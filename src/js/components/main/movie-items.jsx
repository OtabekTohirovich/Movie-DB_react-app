import { GraphicEq } from "@mui/icons-material";
import { Collapse, Typography } from "@mui/material";
import { useState } from "react";

const Movietems = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div onClick={handleExpandClick}>
      <GraphicEq sx={{ cursor: "pointer" }} />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography paragraph>Method:</Typography>
      </Collapse>
    </div>
  );
};

export default Movietems;
