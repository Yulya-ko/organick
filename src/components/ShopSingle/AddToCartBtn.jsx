import { Button } from "@mui/material";
import ArrowButtonIcon from "../Icons/ArrowForwardIcon";
import * as fonts from "../../assets/fonts/fonts";


export default function AddToCartBtn({ onAddToCart }) {
  
  return (
    <Button
      variant="contained"
      size="large"
      endIcon={<ArrowButtonIcon />}
      onClick={onAddToCart}
      sx={{
        backgroundColor: '#274c5b',
        ...fonts.robotoBold_color20,
        fontSize: {xs: '18px', md: '20px'},
        borderRadius: 2,
        padding: { xs: '20px 30px', md: '28px 29px' },
        textTransform: 'none',
        width: { xs: '90%', md: 213 },
        height: { xs: 60, md: 80 },
        '&:hover': { backgroundColor: '#1f3f4a' },
      }}
    >
      Add To Cart
    </Button>
  );
}
