import { Box, Typography } from "@mui/material"
import { products } from "../../data/products"
import icon from '../../assets/images/home_page/header/icon-delete.png'
import * as fonts from "../../assets/fonts/fonts"
import { removeItemFromCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"


const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const product = products.find(item => item.id === cartItem.productId);
  if (!product) return null;

  return (
    <Box sx={{ mb: 2 }}>
      <Typography sx={{...fonts.openSansBold18}}>{product.name}</Typography>
      <Typography sx={{...fonts.openSansBold18}}>{cartItem.quantity} Qty.</Typography>
      <Typography sx={{...fonts.openSansBold18}}>Price: ${product.price * cartItem.quantity}</Typography>
      <span onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}>
          <img src={icon} alt="Icon Delete" width={20} />
        </span>
    </Box>
  )
}

export default CartItem
