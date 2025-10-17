import { useParams } from "react-router-dom";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import { products } from "../../data/products";
import * as fonts from "../../assets/fonts/fonts";
import Stars from "../../components/common/Stars";
import QuantityInput from "./QuantityInput";
import AddToCartBtn from "./AddToCartBtn";
import { useState, useEffect } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setProduct(found);
    setQuantity("1"); 
  }, [id]);

  if (!product) {
    return (
      <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
        Product not found
      </Typography>
    );
  }

  // const handleAddToCart = () => {
  //   console.log(`🛒 Додано в корзину ${quantity} товарів`);
  // };

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", mt: { xs: 4, md: '133px' }, px: 2 }}>
      <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: "column", md: "row" }, gap: '83px' }}>
        
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <Chip
            label={product.category}
            sx={{
              position: "absolute",
              top: { xs: 16, md: 38 },
              left: { xs: 16, md: 35 },
              backgroundColor: "#274C5B",
              color: "#fff",
              borderRadius: "8px",
              padding: { xs: "3px 8px", md: "5px 12px" },
              minWidth: { xs: "70px", md: "96px" },
              height: { xs: "24px", md: "31px" },
              fontSize: { xs: "12px", md: "15px" },
              ...fonts.openSansSemiBold15,
              zIndex: 5,
            }}
          />
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{
              width: { xs: "100%", md: "590px" },
              height: { xs: "auto", md: "560px" },
              borderRadius: "30px",
              objectFit: "contain",
              backgroundColor: "#f9f8f8",
              p: { xs: 2, md: 3 },
              zIndex: 3,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.1)"
            }}
          />
        </Box>

        <Box sx={{ flex: 1, maxWidth: "658px", textAlign: {xs: 'center', md: 'start'} }}>
          <Typography variant="h4" sx={{ ...fonts.robotoExtraBold40, fontSize: {xs: "30px", md: "40px"} }}>
            {product.name}
          </Typography>

            <Box sx={{ display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'}}}>
                <Stars />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: {xs: 'center', md: 'flex-start'}, gap: 1, mb: '27px', mt: '9px' }}>
            <Typography sx={{ textDecoration: "line-through", ...fonts.openSansSemiBold20 }}>
              ${product.oldPrice.toFixed(2)}
            </Typography>
            <Typography sx={{ fontSize: "24px", color: "#274C5B", fontWeight: "bold", ...fonts.openSansBold25 }}>
              ${product.price.toFixed(2)}
            </Typography>
          </Box>
            
          <Typography variant="body1" sx={{ mt: 3, mb: "35px", ...fonts.openSansRegular18 }}>
            {product.description}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '20px'}}>
            <Typography sx={{ ...fonts.robotoBold20 }}>
              Quantity:
            </Typography>
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
              <AddToCartBtn onAddToCart={() => {dispatch(addItemToCart({product, quantity}))}} />  
          </Box>
        </Box>
      </Box>     
    </Box>
  );
}
