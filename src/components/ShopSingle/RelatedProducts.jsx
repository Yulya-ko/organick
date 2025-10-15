import { Box, Typography, Card, CardMedia, CardContent, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import * as fonts from "../../assets/fonts/fonts";
import { products } from "../../data/products";
import Stars from "../common/Stars";
import { useState, useEffect } from "react";

export default function RelatedProducts({ currentProductId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProducts = () => {
    const filtered = products.filter(p => p.id !== currentProductId);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    setRelatedProducts(getRelatedProducts());
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
        {relatedProducts.map((item) => (
          <Card
            key={item.id}
            component={Link}
            to={`/product/${item.id}`}
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
              textDecoration: "none",
            }}
          >
            <Chip
              label={item.category}
              sx={{
                position: "absolute",
                top: 26,
                left: 26,
                backgroundColor: "#274C5B",
                color: "#fff",
                borderRadius: "8px",
                padding: { xs: "3px 8px", md: "5px 12px" },
                minWidth: { xs: "70px", md: "96px" },
                height: { xs: "24px", md: "31px" },
                fontSize: { xs: "12px", md: "15px" },
                ...fonts.openSansSemiBold15,
                zIndex: 2,
              }}
            />
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
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
                {item.name}
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
                    ${item.oldPrice.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "14px", md: "18px" },
                      ...fonts.openSansBold18,
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>
                <Stars />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
