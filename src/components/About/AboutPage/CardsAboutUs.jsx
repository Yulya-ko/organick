import { Box, Typography, Card } from "@mui/material";
import * as fonts from "../../../assets/fonts/fonts"; 

export default function CardsAboutUs({ icon, title }) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        gap: { xs: 1.5, md: 2.5 }, 
        alignItems: 'flex-start',
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignContent: 'center',
          flexShrink: 0,
          margin: { xs: '0 auto', md: 0 } 
        }}
      >
        <Card
          sx={{
            width: { xs: 32, md: 70 },
            height: { xs: 32, md: 70 },
            backgroundImage: `url(${icon})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        />
      </Box>

      <Box sx={{ width: { xs: '100%', md: 226 }, textAlign: { xs: 'center', md: 'start' } }}>
        <Typography sx={{ ...fonts.robotoMedium25, fontSize: { xs: '18px', md: '25px' } }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
