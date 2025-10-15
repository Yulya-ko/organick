import { Box, Typography, Card } from "@mui/material";
import * as fonts from "../../../assets/fonts/fonts"; 

export default function InfoCard({ icon, title, description }) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        gap: { xs: 1.5, md: 2.5 }, 
        alignItems: 'flex-start',
        flexDirection: { xs: 'column', md: 'row' } // на мобільних іконка над текстом
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          width: { xs: 70, md: 101 },
          height: { xs: 70, md: 101 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          margin: { xs: '0 auto', md: 0 }
        }}
      >
        <Card
          sx={{
            width: { xs: 36, md: 53 },
            height: { xs: 32, md: 46 },
            backgroundImage: `url(${icon})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        />
      </Box>

      <Box sx={{ width: { xs: '100%', md: 444 }, textAlign: { xs: 'center', md: 'start' } }}>
        <Typography sx={{ ...fonts.robotoExtraBold25, fontSize: { xs: '18px', md: '25px' } }}>
          {title}
        </Typography>
        <Typography sx={{ ...fonts.openSansRegular18, pt: 0.9, fontSize: { xs: '14px', md: '18px' }, lineHeight: { xs: '20px', md: '24px' } }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
