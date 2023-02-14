import { MoreHoriz } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { collors } from "../../../constants/color";

const Elpises = () => {
  return (
    <Stack sx={{ borderRadius: "15px", background: collors.menulight, cursor:'pointer'}} className="elpises">
      <MoreHoriz />
    </Stack>
  );
};

export default Elpises;
