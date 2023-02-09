import { AddIcCallOutlined, Search } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../../constants";
import { collors } from "../../../constants/color";
import NavbarItem from "./navbar-item/navbar-item";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: collors.mainBlue,
      }}
    >
      <Container fixed>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} mt={"4px"}>
            <Link to={"/"}>
              <img src={logo} alt="logo" height={20} />
            </Link>
            <Stack direction={"row"} alignItems={"center"}>
              <NavbarItem name={"Movies"} />
              <NavbarItem name={"TV Shows"} />
              <NavbarItem name={"People"} />
              <NavbarItem name={"More"} />
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <AddIcCallOutlined
              sx={{ color: collors.white, fontSize: "25px" }}
            />
            <Typography
              sx={{ margin: "0 15px", color: collors.white, fontWeight: 600 }}
            >
              Login
            </Typography>
            <Typography
              sx={{ margin: "0 15px", color: collors.white, fontWeight: 600 }}
            >
              Join TMDB
            </Typography>
            <Search sx={{ color: collors.lightblue, fontSize: "25px" }} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Navbar;
