import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./../../assets/images/home_page/header/logo.svg";
import * as fonts from "../../assets/fonts/fonts";
import SearchIcon from "./../Icons/SearchIcon";
import CartIcon from "./../Icons/CartIcon";
import "./Header.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Shop", path: "/shop" },
  { label: "Services", path: "/services" },
  { label: "Contacts", path: "/contacts" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ padding: "40px 0px" }}
      className="appBar"
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: 'center', px: { xs: 2, md: 8 } }}>
        {/* Логотип */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <img src={logo} alt="Logo" width={37} height={54} />
          <Typography
            sx={{
              ...fonts.robotoBold38,
              fontSize: { xs: "24px", md: "38px" },
            }}
          >
            Organick
          </Typography>
        </Link>

        {/* Desktop навігація */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
  {navLinks.map(({ label, path }) => (
    <Link
      key={label}
      to={path}
      style={{ textDecoration: "none" }} // через style прибираємо підкреслення
    >
      <Box
        sx={{
          ...fonts.robotoBold20,
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            color: "#68a47f",
            transform: "scale(1.05)",
          },
        }}
      >
        {label}
      </Box>
    </Link>
  ))}
</Box>

        {/* Дії */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 3 },
          }}
        >
          {/* Search (desktop only) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
            className="searchBox"
          >
            <InputBase
              sx={{ ...fonts.robotoRegular18 }}
              className="searchInput"
              placeholder="Search..."
            />
            <SearchIcon sx={{ fontSize: 57 }} className="searchIcon" />
          </Box>

          {/* Cart */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 0, md: 1 },
              border: { xs: "none", md: "1px solid #e0e0e0" },
              borderRadius: { xs: "0", md: "33px" },
              width: { xs: "auto", md: "159px" },
              height: { xs: "auto", md: "66px" },
              padding: { xs: 0, md: "0 10px" },
              transition: { md: "all 0.3s ease" },
              cursor: "pointer",
              "&:hover": {
                backgroundColor: { xs: "transparent", md: "#f0f5f0" },
              },
            }}
          >
            <CartIcon
              sx={{
                width: { xs: 24, md: 56 },
                height: { xs: 24, md: 56 },
              }}
              className="cartIcon"
            />
            <Typography
              sx={{
                ...fonts.robotoSemiBold18,
                display: { xs: "none", md: "block" },
              }}
            >
              Cart (0)
            </Typography>
          </Box>

          {/* Burger menu (mobile only) */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: "100%", bgcolor: "#f0f5f0" } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: 3,
          }}
        >
          {/* Верхній блок: логотип + корзина + закриття */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
              pt: '20px'
            }}
          >
            <Link
              to="/"
              style={{ display: "flex", alignItems: "center", gap: 8,  textDecoration: 'none' }}
            >
              <img src={logo} alt="Logo" width={37} height={54} />
              <Typography sx={{ ...fonts.robotoBold25 }}>Organick</Typography>
            </Link>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: 1 }}>
              <CartIcon sx={{ width: 30, height: 30, color: '#fff' }} />
              <Typography sx={{ ...fonts.robotoSemiBold18 }}>
                Cart (0)
              </Typography>
            </Box>

            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Список лінків */}
          <Box
  sx={{
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: '30px'
  }}
>
  <List sx={{ textAlign: "center" }}>
    {navLinks.map(({ label, path }) => (
      <ListItem
        button
        key={label}
        component={Link}
        to={path}
        onClick={toggleDrawer}
      >
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            sx: { ...fonts.robotoBold25, textAlign: "center" },
          }}
        />
      </ListItem>
    ))}
  </List>
</Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
