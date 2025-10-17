import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import ArrowButtonIcon from "../Icons/ArrowForwardIcon";
import * as fonts from "../../assets/fonts/fonts"; 
import ProductCard from "./ProductCard";

export default function Products() {
  const initialVisible = 8; // спочатку 8 товарів
  const loadMoreCount = 4;   // додаємо ще 4 при Load More
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + loadMoreCount);
  };

  const visibleProducts = products.slice(0, visibleCount);
  const allVisible = visibleCount >= initialVisible + loadMoreCount;

  return (
    <Box component="section" sx={{ textAlign: "center", mt: { xs: "20px", md: "40px" }, mb: { xs: "60px", md: "100px" } }}>
      
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" sx={{ mb: { xs: "60px", md: "122px" } }}>
        {visibleProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} linkTo={`/product/${product.id}`} />
          </Grid>
        ))}
      </Grid>

      {!allVisible ? (
        <Button
          onClick={handleLoadMore}
          variant="contained"
          size="large"
          endIcon={<ArrowButtonIcon />}
          sx={{
            backgroundColor: '#274c5b',
            ...fonts.robotoBold_color20,
            borderRadius: 2,
            padding: { xs: '10px 30px', md: '28px 35px' },
            mt: { xs: 2, md: 2.875 },
            textTransform: 'none',
            width: { xs: '95%', sm: '40%', md: 220 },
            height: { xs: 60, md: 79 },
            '&:hover': { backgroundColor: '#234C6A' },
          }}
        >
          Load More
        </Button>
      ) : (
        <Button
          component={Link}
          to="/shop"
          variant="contained"
          size="large"
          endIcon={<ArrowButtonIcon />}
          sx={{
            backgroundColor: '#274c5b',
            ...fonts.robotoBold_color20,
            borderRadius: 2,
            padding: { xs: '10px 30px', md: '28px 35px' },
            mt: { xs: 2, md: 2.875 },
            textTransform: 'none',
            width: { xs: '95%', sm: '40%', md: 220 },
            height: { xs: 60, md: 79 },
            '&:hover': { backgroundColor: '#234C6A' },
          }}
        >
          Go to Shop
        </Button>
      )}
    </Box>
  );
}
