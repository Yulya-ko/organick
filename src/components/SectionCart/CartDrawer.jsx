import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as fonts from "../../assets/fonts/fonts";
import CartItem from "../Cart/CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

export default function CartDrawer({ open, onClose }) {
  const cartItem = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "400px", md: "25%" },
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
        
        {/* Пока пусто, позже здесь будут товары */}
        <Box>
          {cartItem.map(item => <CartItem key={item.productId} cartItem={item} />)}

          {cartItem.length === 0 && (
            <Typography sx={{ ...fonts.openSansBold18}}>Your cart is empty</Typography>
          )}
        </Box>
          <Typography sx={{...fonts.openSansBold18}}>
            TOTAL: ${totalPrice}
          </Typography>
      </Box>
    </Drawer>
  );
}
