import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { products } from "../../data/products";
import ProductCard from "../Products/ProductCard";
import * as fonts from "../../assets/fonts/fonts";

export default function RelatedProducts({ currentProductId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(p => p.id !== currentProductId);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    setRelatedProducts(shuffled.slice(0, 4));
  }, [currentProductId]);

  return (
    <Box
      sx={{
        maxWidth: 1400,
        mx: "auto",
        mt: { xs: 6, md: 10 },
        px: { xs: 2, md: 0 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: { xs: 3, md: 5 },
          color: "#274C5B",
          ...fonts.robotoExtraBold40,
          fontSize: "30px",
        }}
      >
        Related Products
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "center",
          gap: { xs: 2, md: 3 },
        }}
      >
        {relatedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            linkTo={`/product/${product.id}`}
          />
        ))}
      </Box>
    </Box>
  );
}
