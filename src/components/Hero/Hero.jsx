import { Box, Typography } from "@mui/material";
import bgImage from '../../assets/images/home_page/hero/background-img.jpg';
import * as fonts from "../../assets/fonts/fonts"; 
import YellowBtn from "../common/YellowBtn";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: { xs: "120px 20px 100px 20px", md: "247px 0px 220px 260px" }, 
      }}
    >
      <Box
        sx={{
          width: { xs: '80%', md: '530px' },
          textAlign: { xs: 'start', md: 'left' }, 
          margin: { xs: 'auto', md: '0' },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            ...fonts.yellowtailRegular36,
            fontSize: { xs: '30px', md: '36px' },
          }}
        >
          100% Natural Food
        </Typography>

        <Typography
          variant="h1"
          sx={{
            ...fonts.robotoExtraBold70,
            mt: { xs: "8px", md: "8px" },
            mb: { xs: '16px', md: '23px' },
            fontSize: { xs: '32px', sm: '40px', md: '70px' },
            lineHeight: { xs: '40px', sm: '50px', md: '80px' },
            width: {xs: '300px', md: '530px'}
          }}
        >
          Choose the best healthier way of life
        </Typography>

          <YellowBtn 
            text="Explore Now" 
            to="/shop"
          />
      </Box>
    </Box>
  );
}
