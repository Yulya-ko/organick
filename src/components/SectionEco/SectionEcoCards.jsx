import { Box, Typography } from "@mui/material";
import { sectionEcoCards } from "../../data/sectionEcoCards";
import * as fonts from "../../assets/fonts/fonts"; 

export default function SectionEcoCards() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: { xs: 4, md: 2 },
        backgroundColor: '#f1f8f4',
        padding: { xs: '80px 16px', md: '187px 0' }
      }}
    >
      {sectionEcoCards.map((card, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { xs: '100%', md: '612px' },
            height: { xs: '300px', md: '583px' },
            position: 'relative',
            borderRadius: { xs: '20px', md: '0' },
            overflow: 'hidden'
          }}
        >
          <Typography
            sx={{
              borderRadius: '20px',
              backgroundColor: '#fff',
              padding: { xs: '12px 20px', md: "33px 83px" },
              width: { xs: '140px', md: "160px" },
              height: { xs: '24px', md: "33px" },
              position: 'absolute',
              top: { xs: '50%', md: '250px' },
              left: { xs: '50%', md: '150px' },
              transform: { xs: 'translate(-50%, -50%)', md: 'none' },
              ...fonts.robotoMedium25,
              fontSize: { xs: '16px', md: '25px' },
              textAlign: 'center'
            }}
          >
            {card.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
