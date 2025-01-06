import React from "react";
import { AppBar, Toolbar, Typography, Badge, IconButton, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function NavBar() {
  const favoritesCount = useSelector((state) => state.favorites?.favorites?.length || 0);
  const { language, direction, changeLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div style={{ textAlign: direction === 'ltr' ? 'left' : 'right', direction }}>
      <AppBar position="static" className="nav">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Movie App
          </Typography>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/favorites" className="nav-link">
            Favorites
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
          <NavLink className="nav-link"  >
            <IconButton aria-label="favorites">
              <Badge badgeContent={favoritesCount} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </NavLink>

          {/* Language Dropdown */}
          <FormControl>
            <InputLabel>Language</InputLabel>
            <Select value={language} onChange={handleLanguageChange} label="Language">
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="ar">العربية</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}
