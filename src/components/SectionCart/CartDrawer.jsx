import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as fonts from "../../assets/fonts/fonts";
import CartItem from "../Cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems, getTotalPrice, removeItemFromCart } from "../../redux/cartSlice";
import { useState } from "react";

export default function CartDrawer({ open, onClose }) {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  const handleBuy = () => {
    if (cartItems.length === 0) return;

    setShowMessage(true);

    cartItems.forEach(item => {
      dispatch(removeItemFromCart({ cartItemId: item.id }));
    });

    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "400px", md: "35%" },
          bgcolor: "#fff",
          borderRadius: "16px 0 0 16px",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%", p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography sx={{ ...fonts.robotoBold25 }}>Your Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ flex: 1, overflowY: "auto" }}>
          {cartItems.length === 0 && !showMessage && (
            <Typography sx={{ ...fonts.openSansBold18 }}>Your cart is empty</Typography>
          )}
          {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
          {showMessage && (
            <Typography sx={{ color: "green", mt: 2, textAlign: "center", ...fonts.openSansBold18 }}>
              Thank you for your order!
            </Typography>
          )}
        </Box>

        {cartItems.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ ...fonts.openSansBold25, mb: 2, color: "#BF092F" }}>
              TOTAL: ${totalPrice.toFixed(2)}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#274c5b", "&:hover": { backgroundColor: "#1f3f4a" } }}
              onClick={handleBuy}
            >
              Buy
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
