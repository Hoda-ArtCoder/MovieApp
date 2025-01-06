import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar, Badge, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import "./header.css";

export default function NavBar() {
  const favoritesCount = useSelector((state) => state.favorites?.favorites?.length || 0);

  return (
    <AppBar position="static" className="nav">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
        <NavLink className="nav-link" onClick={() => navigate("/favorites")} >
          <IconButton aria-label="favorites">
            <Badge badgeContent={favoritesCount} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
