import { Box, Typography } from "@mui/material";
import * as fonts from "../../../assets/fonts/fonts"; 

const Cards = ({ icon, title, text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        borderRadius: '20px',
        padding: { xs: '15px', md: '20px' },
        width: { xs: 200, md: 257 },
        height: { xs: 280, md: 335 },
        textAlign: 'center',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      <Box
        sx={{
          width: { xs: 75, md: 95 },
          height: { xs: 75, md: 95 },
          backgroundColor: '#f9f8f8',
          borderRadius: '18px',
          marginBottom: { xs: '10px', md: '15px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{
            width: { xs: 36, md: 46 },
            height: { xs: 36, md: 46 },
          }}
        />
      </Box>

      <Typography
        variant="h6"
        sx={{
          ...fonts.robotoExtraBold25,
          fontSize: { xs: '18px', md: '25px' },
          marginBottom: { xs: '8px', md: '10px' }
        }}
      >
        {title}
      </Typography>

      {/* Текст */}
      <Typography
        variant="body2"
        sx={{
          ...fonts.openSansRegular18,
          fontSize: { xs: '12px', md: '18px' },
          textAlign: 'center',
          width: { xs: '160px', md: '190px' }
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Cards;
