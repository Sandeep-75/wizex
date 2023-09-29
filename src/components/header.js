import * as React from "react";
import { AppBar, Box, Toolbar, Button, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { styled } from "@mui/material/styles";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <AppBar position="fixed" variant="outlined" sx={{ height: 72 }}>
      <Toolbar>
        <a href={"/"}>
          <img src={"/images/Logo.png"} />
        </a>
        <NavLinksWrapper>
          {!isMobile && (
            <>
              <Button color="primary" variant="text">
                Investment opportunities
              </Button>
              <Button color="primary" variant="text">
                Get Started
              </Button>
            </>
          )}
          <Button startIcon={<MenuIcon />} color="primary" variant="contained">
            Menu
          </Button>
        </NavLinksWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const NavLinksWrapper = styled(Box)(
  () => `
    display: flex;
    align-items: center;
    gap: 20px
  `
);
