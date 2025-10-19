import { Card, CardContent, CardMedia, Chip, Box, Typography } from "@mui/material";
import * as fonts from "../../assets/fonts/fonts"; 
import Stars from "../common/Stars";
import { Link } from "react-router-dom";

export default function ProductCard({ product, linkTo }) {
  const CardWrapper = linkTo ? Link : "div";

  return (
    <CardWrapper to={linkTo || ""} style={{ textDecoration: "none", color: "inherit" }}>
      <Card
        sx={{
          width: { xs: "250px", sm: 300, md: 335 },
          height: {xs: '350px', sm: '450px', md: '450px'}, 
          borderRadius: "30px",
          boxShadow: "none",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-6px)" },
          backgroundColor: "#f9f8f8",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        <Chip
          label={product.category}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            backgroundColor: "#274C5B",
            color: "#fff",
            borderRadius: "8px",
            padding: "5px 12px",
            fontSize: "15px",
            ...fonts.openSansSemiBold15,
            zIndex: 1
          }}
        />

        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: 220, 
            objectFit: "contain",
            mt: 4,
          }}
        />

        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", pb: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", mb: 1, ...fonts.robotoMedium20, textAlign: 'center' }}
          >
            {product.name}
          </Typography>

          <Box sx={{ borderTop: "1px solid #dedddd", pt: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography sx={{ textDecoration: "line-through", fontSize: "15px", ...fonts.openSansSemiBold_color15 }}>
                ${product.oldPrice.toFixed(2)}
              </Typography>
              <Typography sx={{ fontSize: "18px", ...fonts.openSansBold18 }}>
                ${product.price.toFixed(2)}
              </Typography>
            </Box>
            <Stars />
          </Box>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
