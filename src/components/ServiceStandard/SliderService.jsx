import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { imageData } from "../../data/imageData";
import { useState } from "react";

export default function SliderService() {
  const [slide, setSlide] = useState(0);

  const previousImage = () => {
    setSlide((slide => {
        slide--;
        if (slide < 0) {
            return imageData.length - 1;
        }
        return slide;
    }))
  };

  const nextImage = () => {
    setSlide((slide => {
        slide++;
        if (slide > imageData.length - 1) {
            return slide = 0;
        }
        return slide;
    }))
  };

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1920px",
        mx: "auto",
        overflow: "hidden",
      }}
    >
      {/* Зображення */}
      <Box
        component="img"
        src={imageData[slide].image}
        alt={`Slide ${slide}`}
        sx={{
          width: "100%",
          height: { xs: "250px", sm: "400px", md: "550px", lg: "650px" },
          objectFit: "cover",
          display: "block",
        }}
      />

      <IconButton
        onClick={previousImage}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.6)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={nextImage}
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.6)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}
