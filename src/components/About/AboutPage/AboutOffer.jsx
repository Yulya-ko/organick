import { Box, Typography } from "@mui/material";
import * as fonts from "../../../assets/fonts/fonts";
import image1 from "../../../assets/images/about_page/section-offer/spicy.png";
import image2 from "../../../assets/images/about_page/section-offer/nuts-feesd.png";
import image3 from "../../../assets/images/about_page/section-offer/fruits.png";
import image4 from "../../../assets/images/about_page/section-offer/vegetable.png";

const items = [
  { image: image1, title: "Spicy" },
  { image: image2, title: "Nuts & Feesd" },
  { image: image3, title: "Fruits" },
  { image: image4, title: "Vegetable" },
];

function AboutOffer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        pt: { xs: "100px", md: "188px" },
        pb: { xs: "60px", md: "188px" },
        px: { xs: 2, sm: 3, md: 0 },
        backgroundColor: "#274c5b",
      }}
    >
      <Typography
        sx={{
          ...fonts.yellowtailRegular36,
          fontSize: { xs: "24px", md: "36px" },
        }}
      >
        About Us
      </Typography>

      <Typography
        sx={{
          ...fonts.robotoExtraBold_color50,
          fontSize: { xs: "26px", sm: "32px", md: "50px" },
          mt: "10px",
          color: "#fff",
        }}
      >
        What We Offer for You
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: 'wrap',
          gap: { xs: "8px", sm: "10px", md: "20px" },
          mt: "40px",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {items.map(({ image, title }) => (
          <Box key={title} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: { xs: "260px", sm: "280px", md: "300px", lg: "334px" },
                height: { xs: "200px", sm: "230px", md: "280px", lg: "314px" },
                borderRadius: "30px",
                overflow: "hidden",
                mx: "auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                ...fonts.robotoMedium_color25,
                fontSize: { xs: "18px", md: "22px", lg: "25px" },
                color: "#fff",
                pt: "18px",
              }}
            >
              {title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AboutOffer;
