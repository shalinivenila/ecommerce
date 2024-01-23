import React from "react";
import { useNavigate } from "react-router-dom";
import skirtData from "../components/skirt.json";
import { Button, Typography, AppBar, Toolbar } from "@mui/material";


const Header = () => {
  const navigate = useNavigate();

  const handleLogoutChange = (e) => {
    localStorage.removeItem("token");
    navigate(`/registration`);
  };

  const navigateToCartPage = () => {
    navigate(`/cart`);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{backgroundColor:'yellow'}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black'}}>
          FOREVER 21
        </Typography>
        <Button
          onClick={navigateToCartPage}
          >
          <i class="fa fas fa-shopping-cart"></i>
        </Button>

        {/* <div onClick={() => navigateToCartPage()} className="carticon"></div> */}

        <Button
          onClick={handleLogoutChange}
          variant="contained"
          color="secondary"
          style={{ marginLeft: "auto" }}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
