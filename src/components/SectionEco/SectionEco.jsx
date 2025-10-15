import { Box, Typography } from "@mui/material";
import bgImage from "./../../assets/images/home_page/ecoFriendly/bg-img.jpg";
import * as fonts from "../../assets/fonts/fonts"; 

export default function SectionEco() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "start",
        alignItems: "center",
        gap: 0
      }}
    >

      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: { xs: "100%", md: "50%" }, 
          minHeight: { xs: "400px", md: "931px" },
        }}
      />

      <Box
        sx={{
          backgroundColor: "#fff",
          padding: { xs: "40px 20px", md: "78px 89px" },
          borderRadius: "30px",
          maxWidth: { xs: "100%", md: "560px" },
          marginLeft: { xs: 0, md: "-100px" }, 
          mt: { xs: 4, md: 0 }
        }}
      >
        <Typography
          sx={{
            ...fonts.yellowtailRegular36,
            fontSize: { xs: '30px', md: '36px' }
          }}
        >
          Eco Friendly
        </Typography>

        <Typography
          sx={{
            ...fonts.robotoExtraBold50,
            fontSize: { xs: '28px', sm: '35px', md: '50px' },
            lineHeight: { xs: '34px', md: '1.2' },
            textAlign: "start",
            mb: { xs: 2, md: 3 },
          }}
        >
          Econis is a Friendly Organic Store
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", md: "35px" },
            width: "100%"
          }}
        >
          <Box>
            <Typography 
              sx={{
                ...fonts.robotoMedium25,
                fontSize: { xs: '18px', md: '25px' }
              }}>
                Start with Our Company First
            </Typography>
            <Typography
              sx={{
                ...fonts.openSansRegular18,
                fontSize: { xs: '14px', md: '18px' }
              }}>
              Our journey began with a simple idea — to make healthy, organic food accessible to everyone. We believe in sustainability, honesty, and care for both people and the planet.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                ...fonts.robotoMedium25,
                fontSize: { xs: '18px', md: '25px' }
              }}>
                Learn How to Grow Yourself
            </Typography>
            <Typography
              sx={{
                ...fonts.openSansRegular18,
                fontSize: { xs: '14px', md: '18px' }
              }}>
              We encourage everyone to take small steps toward greener living. Discover how to grow your own herbs and vegetables naturally — it’s easier and more rewarding than you think!
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                ...fonts.robotoMedium25,
                fontSize: { xs: '18px', md: '25px' }
              }}>
                Farming Strategies of Today
            </Typography>
            <Typography
              sx={{
                ...fonts.openSansRegular18,
                fontSize: { xs: '14px', md: '18px' }
              }}>
              Modern organic farming combines tradition and innovation. Our farmers use eco-friendly methods to preserve soil health and ensure pure, nutritious produce.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
