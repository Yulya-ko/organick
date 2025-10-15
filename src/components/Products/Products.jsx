import { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from "@mui/material";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import ArrowButtonIcon from "../Icons/ArrowForwardIcon";
import * as fonts from "../../assets/fonts/fonts"; 
import Stars from "../common/Stars";

export default function Products() {
  const [visibleCount, setVisibleCount] = useState(8); 

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); 
  };

  const visibleProducts = products.slice(0, visibleCount);
  const allVisible = visibleCount >= products.length;

  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        mt: { xs: "20px", md: "40px" },
        mb: { xs: "60px", md: "100px" },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ mb: { xs: "60px", md: "122px" } }}
      >
        {visibleProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                width: { xs: "100%", sm: 300, md: 335 },
                height: { xs: "auto", md: 483 },
                p: { xs: 1.5, md: 2 },
                borderRadius: "30px",
                boxShadow: "none",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-6px)" },
                backgroundColor: "#f9f8f8",
                position: "relative",
              }}
            >
              <Chip
                label={product.category}
                sx={{
                  position: "absolute",
                  mt: 2,
                  ml: -15,
                  backgroundColor: "#274C5B",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: { xs: "3px 8px", md: "5px 12px" },
                  minWidth: { xs: "70px", md: "96px" },
                  height: { xs: "24px", md: "31px" },
                  fontSize: { xs: "12px", md: "15px" },
                  ...fonts.openSansSemiBold15,
                }}
              />

              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: { xs: 200, md: 324 },
                  objectFit: "contain",
                  p: { xs: "16px", md: "31px" },
                }}
              />

              <CardContent sx={{ textAlign: "start", pb: { xs: "12px", md: "17px" } }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontSize: { xs: "16px", md: "20px" },
                    ...fonts.robotoMedium20,
                  }}
                >
                  {product.name}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 1,
                    mb: 1,
                    borderTop: "1px solid #dedddd",
                    pt: { xs: "4px", md: "6px" },
                  }}
                >
                  <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        fontSize: { xs: "12px", md: "15px" },
                        ...fonts.openSansSemiBold_color15,
                      }}
                    >
                      ${product.oldPrice.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "14px", md: "18px" },
                        ...fonts.openSansBold18,
                      }}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                  </Box>

                  <Stars />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {!allVisible && (
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
                  '&:hover': {
                    backgroundColor: '#234C6A',
                  },
                }}
        >
          Load More
        </Button>
      )}

      {allVisible && (
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
                  '&:hover': {
                    backgroundColor: '#234C6A',
                  },
                }}
        >
          Go to Shop
        </Button>
      )}
    </Box>
  );
}
