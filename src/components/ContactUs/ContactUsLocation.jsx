import { Box, Typography } from "@mui/material";
import * as fonts from "../../assets/fonts/fonts";
import image from "../../assets/images/contacts_page/imageTwo.jpg";
import icon from "../../assets/images/contacts_page/location-icon.png";
import LocationCards from "./LocarionCards";

export default function ContactUsLocation() {
  return (
    <Box
      sx={{
        maxWidth: "1400px",
        mx: "auto",
        mt: {xs: '100px', md: "209px"},
        position: "relative", 
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: "500px", md: "758px" },
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "50%", md: "10%" },
            transform: {
              xs: "translate(50%, -50%)", 
              md: "translate(0, -50%)", 
            },
            width: { xs: "80%", md: "480px" },
            color: "#fff",
            backgroundColor: '#fff',
            padding: { xs: '20px', md: '46px 53px'},
            borderRadius: '30px'
          }}
        >
          <Typography
            sx={{
              ...fonts.yellowtailRegular36,
              fontSize: { xs: "24px", md: "36px" },
              textAlign: { xs: "center", md: "start" },
              mb: {xs: '10px', md: 0}
            }}
          >
            Location
          </Typography>

          <Typography
            sx={{
              ...fonts.robotoExtraBold50,
              fontSize: { xs: "28px", md: "50px" },
              textAlign: { xs: "center", md: "start" },
              mt: '-20px'
            }}
          >
            Our Farms
          </Typography>

          <Typography
            sx={{
              ...fonts.openSansRegular18,
              fontSize: { xs: "14px", md: "18px" },
              textAlign: { xs: "center", md: "start" },
              mt: '10px'
            }}
          >
            Our farms are carefully selected for optimal growing conditions, ensuring fresh and high-quality organic produce. Sustainable practices keep the soil healthy and crops natural.
          </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '22px', mt: '18px'}}>
                <LocationCards icon={icon} title="New York, USA:" address="299 Park Avenue New York," city="New York 10171" />
                <LocationCards icon={icon} title="London, UK:" address="30 Stamford Street," city="London SE1 9LQ" />
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
