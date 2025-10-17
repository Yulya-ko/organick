import { Box, Grid, Typography } from "@mui/material";
import { products } from "../../data/products";
import ProductCard from "../Products/ProductCard";
import * as fonts from "../../assets/fonts/fonts"; 
import AllCategories from "../Filter/AllCategories";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/foodSlice";


export default function CardsShopProducts() {
  const selectedCategory = useSelector(getSelectedCategory);
  
  return (
    <Box sx={{
        maxWidth: "1600px",
        mx: "auto",
        mt: { xs: "50px", md: "50px" },
      }}>
    <Box component="section" sx={{ textAlign: "center", mt: { xs: '20px', md: '90px' }, mb: { xs: '60px', md: '80px' } }}>
      
      <Box sx={{mb: {xs: '30px', md: "50px"}}}>
        <Typography sx={{
          ...fonts.robotoExtraBold50,
          fontSize: {xs: '30px', md: '50px'},
          textAlign: 'center'
        }}>
          What do you want to buy?
        </Typography>
      </Box>
      <Box sx={{ maxWidth: '1400px', mb: {xs: '30px', md: '80px'}}}>
        <AllCategories/>
      </Box>
      
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" sx={{ mb: { xs: '60px', md: '122px' } }}>
        {products
        .filter(product => {
          if (selectedCategory === 'All') return true;
          return selectedCategory === product.category
        })
        .map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} linkTo={`/product/${product.id}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
}
