import { Box, Typography } from "@mui/material";
import * as fonts from "../../../assets/fonts/fonts";
import iconOne from "../../../assets/images/about_page/icons-about/icon-cardOne.png";
import iconTwo from "../../../assets/images/about_page/icons-about/icon-cardTwo.png";
import imageOne from "../../../assets/images/about_page/image_plate.png";
import imageTwo from "../../../assets/images/about_page/image_tomatoes.png";
import CardsAboutUs from "./CardsAboutUs";
import DarkBtn from "../../common/DarkBtn";

function AboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: { xs: "40px", md: "60px" },
        px: { xs: "16px", sm: "32px", md: "80px" },
        mt: { xs: "50px", md: "68px" },
        mb: { xs: "50px", md: "143px" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          maxWidth: "926px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: { xs: "50px", md: 0 },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${imageOne})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: { xs: "100%", sm: "90%", md: "100%" },
            height: { xs: "300px", sm: "400px", md: "764px" },
            zIndex: 10,
          }}
        />

        <Box
          sx={{
            backgroundImage: `url(${imageTwo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: { xs: "45%", sm: "220px", md: "400px", lg: "466px" },
            height: { xs: "160px", sm: "220px", md: "400px", lg: "466px" },
            position: "absolute",
            bottom: { xs: "-60px", sm: "-70px", md: "0px" },
            left: { xs: "30%", sm: "150px", md: "-30px" },
            transform: { xs: "translateX(-50%)", md: "none" },
            zIndex: 5,
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: "675px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            ...fonts.yellowtailRegular36,
            fontSize: { xs: "24px", md: "36px" },
            pb: 1,
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            ...fonts.robotoExtraBold50,
            fontSize: { xs: "28px", sm: "36px", md: "50px" },
            lineHeight: { xs: "36px", md: "60px" },
          }}
        >
          We do Creative <br /> Things for Success
        </Typography>

        <Typography
          sx={{
            ...fonts.openSansRegular18,
            mt: 2,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: { xs: "22px", md: "28px" },
            maxWidth: "600px",
          }}
        >
          We combine innovation and sustainability to bring the best organic products to your table. Our mission is to create a healthier future through natural farming and responsible production.
        </Typography>

        <Typography
          sx={{
            ...fonts.openSansRegular18,
            mt: 2,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: { xs: "22px", md: "28px" },
            maxWidth: "600px",
          }}
        >
          With years of experience and a passion for quality, we continue to grow while staying true to our roots — honesty, care, and respect for nature.
        </Typography>

        <Box
          sx={{
            mt: { xs: "30px", md: "49px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            gap: { xs: "20px", sm: "30px" },
            mb: '20px'
          }}
        >
          <CardsAboutUs icon={iconOne} title="Modern Agriculture Equipment" />
          <CardsAboutUs icon={iconTwo} title="No growth hormones are used" />
        </Box>

          <DarkBtn text="Explore Now" to="/shop" />
      </Box>
    </Box>
  );
}

export default AboutUs;
