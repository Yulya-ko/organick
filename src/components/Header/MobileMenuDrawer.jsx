import { Drawer, Box, List, ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import * as fonts from "../../assets/fonts/fonts";
import CartIcon from "../Icons/CartIcon";

export default function MobileMenuDrawer({ open, onClose, toggleCartDrawer }) {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Shop", path: "/shop" },
    { label: "Services", path: "/services" },
    { label: "Contacts", path: "/contacts" },
  ];

  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: "100%", bgcolor: "#f0f5f0" } }}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%", p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, pt: "20px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <Typography sx={{ ...fonts.robotoBold25 }}>Organick</Typography>
          </Link>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} onClick={toggleCartDrawer(true)}>
            <CartIcon sx={{ width: 30, height: 30 }} className="cartIcon" />
            <Typography sx={{ ...fonts.robotoSemiBold18 }}>Cart</Typography>
          </Box>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", pt: "30px" }}>
          <List sx={{ textAlign: "center" }}>
            {navLinks.map(({ label, path }) => (
              <ListItem button key={label} component={Link} to={path} onClick={onClose}>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ sx: { ...fonts.robotoBold25, textAlign: "center" } }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
