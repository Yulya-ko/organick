import { Box, Typography } from "@mui/material";
import imgOne from './../../assets/images/home_page/promoBanner/imgOne.jpg';
import imgTwo from './../../assets/images/home_page/promoBanner/imgTwo.jpg';
import * as fonts from "../../assets/fonts/fonts"; 

export default function PromoBanner() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={{ xs: 2, md: '18px' }}
      pt={{ xs: '50px', md: '154px' }}
      pb={{ xs: '80px', md: '190px' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'center', md: 'flex-start' }}
    >
      {/* Блок 1 */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "95%", md: "682px" },
          height: { xs: "300px", md: "386px" },
          backgroundImage: `url(${imgOne})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: '30px',
          overflow: "hidden",
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          backgroundColor: "#f96893",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: '50%', md: '50%' },
            left: { xs: '50%', md: '30%' },
            transform: 'translate(-50%, -50%)',
            textAlign: { xs: 'start', md: 'start' },
            width: { xs: '80%', md: '300px' },
          }}
        >
          <Typography sx={{ ...fonts.yellowtailRegular36, color: '#fff', fontSize: { xs: '30px', md: '36px' } }}>
            Natural!!
          </Typography>
          <Typography sx={{ ...fonts.robotoExtraBold40, color: '#fff', fontSize: { xs: '25px', md: '40px' }, lineHeight: { xs: '28px', md: '48px' } }}>
            Get Garden Fresh Fruits
          </Typography>
        </Box>
      </Box>

      {/* Блок 2 */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "95%", md: "682px" },
          height: { xs: "300px", md: "386px" },
          backgroundImage: `url(${imgTwo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: '30px',
          overflow: "hidden",
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          backgroundColor: "#edf2f6",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: '50%', md: '50%' },
            left: { xs: '50%', md: '26%' },
            transform: 'translate(-50%, -50%)',
            textAlign: { xs: 'start', md: 'start' },
            width: { xs: '80%', md: '300px' },
          }}
        >
          <Typography sx={{ ...fonts.yellowtailRegular36, fontSize: { xs: '30px', md: '36px' } }}>
            Offer!!
          </Typography>
          <Typography sx={{ ...fonts.robotoExtraBold40, fontSize: { xs: '25px', md: '40px' }, lineHeight: { xs: '28px', md: '48px' } }}>
            Get 10% off on Vegetables
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
