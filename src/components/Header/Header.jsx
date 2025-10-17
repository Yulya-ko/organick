import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./../../assets/images/home_page/header/logo.svg";
import * as fonts from "../../assets/fonts/fonts";
import SearchIcon from "./../Icons/SearchIcon";
import CartIcon from "./../Icons/CartIcon";
import CartDrawer from "../SectionCart/CartDrawer";
import MobileMenuDrawer from "./MobileMenuDrawer";
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
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMobileDrawer = () => setMobileOpen(!mobileOpen);
  const toggleCartDrawer = (state) => () => setCartOpen(state);

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: "40px 0px" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", px: { xs: 2, md: 8 } }}>
        <Link
          to="/"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
        >
          <img src={logo} alt="Logo" width={37} height={54} />
          <Typography sx={{ ...fonts.robotoBold38, fontSize: { xs: "24px", md: "38px" } }}>
            Organick
          </Typography>
        </Link>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navLinks.map(({ label, path }) => (
            <Link key={label} to={path} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  ...fonts.robotoBold20,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": { color: "#68a47f", transform: "scale(1.05)" },
                }}
              >
                {label}
              </Box>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 3 } }}>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}
            className="searchBox"
          >
            <InputBase sx={{ ...fonts.robotoRegular18 }} className="searchInput" placeholder="Search..." />
            <SearchIcon sx={{ fontSize: 57 }} className="searchIcon" />
          </Box>

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
              "&:hover": { backgroundColor: { xs: "transparent", md: "#f0f5f0" } },
            }}
            onClick={toggleCartDrawer(true)}
          >
            <CartIcon sx={{ width: { xs: 24, md: 56 }, height: { xs: 24, md: 56 } }} className="cartIcon" />
            <Typography sx={{ ...fonts.robotoSemiBold18, display: { xs: "none", md: "block" } }}>
              Cart (0)
            </Typography>
          </Box>

          <IconButton onClick={toggleMobileDrawer} sx={{ display: { xs: "block", md: "none" } }}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Toolbar>

      <CartDrawer open={cartOpen} onClose={toggleCartDrawer(false)} />

      <MobileMenuDrawer open={mobileOpen} onClose={toggleMobileDrawer} toggleCartDrawer={toggleCartDrawer} />
    </AppBar>
  );
}
