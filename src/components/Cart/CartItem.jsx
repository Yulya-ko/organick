import { Box, Typography, Button } from "@mui/material";
import { products } from "../../data/products";
import icon from "../../assets/images/home_page/header/icon-delete.png";
import * as fonts from "../../assets/fonts/fonts";
import { removeItemFromCart, updateQuantity } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === cartItem.productId);
  if (!product) return null;

  const handleAdd = () => {
    dispatch(updateQuantity({ cartItemId: cartItem.id, quantity: cartItem.quantity + 1, productPrice: product.price }));
  };

  const handleRemove = () => {
    if (cartItem.quantity > 1) {
      dispatch(updateQuantity({ cartItemId: cartItem.id, quantity: cartItem.quantity - 1, productPrice: product.price }));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: {xs: '5px 0', md: "10px 0"},
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Typography sx={{ ...fonts.openSansBold18, flex: 2, textAlign: "left" }}>
        {product.name}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Button size="small" onClick={handleAdd}>+</Button>
        <Typography
          sx={{
            ...fonts.openSansBold18,
            backgroundColor: "#f0f0f0",
            padding: "5px 15px",
            borderRadius: "6px",
            mx: 1,
            textAlign: "center",
          }}
        >
          {cartItem.quantity}
        </Typography>
        <Button size="small" onClick={handleRemove}>-</Button>
      </Box>

      <Typography sx={{ ...fonts.openSansBold18, flex: 1, textAlign: "center" }}>
        ${cartItem.totalPrice.toFixed(2)}
      </Typography>

      <Box
        sx={{
          flex: 0.5,
          textAlign: "right",
          cursor: "pointer",
          ml: {xs: '5px', md: '0px'},
          "&:hover": { opacity: 0.7 },
        }}
        onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}
      >
        <img src={icon} alt="Icon Delete" width={20} />
      </Box>
    </Box>
  );
};

export default CartItem;
