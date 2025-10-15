import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";
import logo from './../../assets/images/home_page/header/logo.svg';
import * as fonts from "../../assets/fonts/fonts"; 

const socialButtonStyle = {
  width: { xs: '50px', sm: '60px' },
  height: { xs: '50px', sm: '60px' },
  backgroundColor: '#eff6f1',
  color: '#274c5b'
};

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 4, sm: 5, md: 6 }} 
          justifyContent="center"
          direction={{ xs: "column", md: "row" }} // стопчик на мобільних
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          {/* Contact Us */}
          <Grid 
            item xs={12} md={4} 
            sx={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: { xs: 'center', md: 'flex-end' }, 
              textAlign: { xs: 'center', md: 'right' },
              pb: { xs: 2, md: '138px' }
            }}
          >
            <Typography sx={{ ...fonts.robotoBold30, fontSize: { xs: '24px', md: '30px' }, mb: 3 }}>
              Contact Us
            </Typography>
            <Box sx={{ display:'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' } }}>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ ...fonts.openSansBold18, fontSize: { xs: '16px', md: '18px' } }}>Email</Typography>
                <Typography sx={{ ...fonts.openSansRegular18, fontSize: { xs: '14px', md: '18px' } }}>needhelp@organia.com</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ ...fonts.openSansBold18, fontSize: { xs: '16px', md: '18px' } }}>Phone</Typography>
                <Typography sx={{ ...fonts.openSansRegular18, fontSize: { xs: '14px', md: '18px' } }}>666 888 888</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ ...fonts.openSansBold18, fontSize: { xs: '16px', md: '18px' } }}>Address</Typography>
                <Typography sx={{ ...fonts.openSansRegular18, fontSize: { xs: '14px', md: '18px' } }}>88 road, Borklyn street, USA</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Logo / About */}
          <Grid 
            item xs={12} md={4}
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              pb: { xs: 4, md: 0 }
            }}
          >
            <Box sx={{ display: 'flex', gap: '9px', justifyContent: 'center', textDecoration: 'none' }}>
              <img src={logo} alt="Logo" width={37} height={54} />
              <Typography sx={{ ...fonts.robotoBold38, margin: 0, fontSize: { xs: '28px', md: '38px' }, maxWidth: '154px' }}>
                Organick
              </Typography>
            </Box>
            <Typography sx={{ ...fonts.openSansRegular18, fontSize: { xs: '14px', md: '18px' }, mt: 3, mb: 4, maxWidth: { xs: '100%', md: '543px' }}}>
              Organick stands for pure, healthy, and sustainable organic products. Our brand represents quality, trust, and care for both people and the planet.
            </Typography>
            <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 }, justifyContent: 'center' }}>
              <IconButton sx={socialButtonStyle}><Instagram /></IconButton>
              <IconButton sx={socialButtonStyle}><Facebook /></IconButton>
              <IconButton sx={socialButtonStyle}><Twitter /></IconButton>
              <IconButton sx={socialButtonStyle}><Pinterest /></IconButton>
            </Box>
          </Grid>

          {/* Utility Pages */}
          <Grid 
            item xs={12} md={4} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: { xs: 'center', md: 'flex-start' }, 
              textAlign: { xs: 'center', md: 'left' },
              pb: { xs: 2, md: 0 }
            }}
          >
            <Typography sx={{ ...fonts.robotoBold30, fontSize: { xs: '24px', md: '30px' }, color: "#274c5b", mb: 3 }}>
              Utility Pages
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", ...fonts.openSansRegular18, fontSize: { xs: '14px', md: '18px' }, lineHeight: "273%", alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Link href="#" sx={{ textDecoration: 'none', color: '#525c60'}}>Style Guide</Link>
              <Link href="#" sx={{ textDecoration: 'none', color: '#525c60'}}>404 Not Found</Link>
              <Link href="#" sx={{ textDecoration: 'none', color: '#525c60'}}>Password Protected</Link>
              <Link href="#" sx={{ textDecoration: 'none', color: '#525c60'}}>Licences</Link>
              <Link href="#" sx={{ textDecoration: 'none', color: '#525c60'}}>Changelog</Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: { xs: 4, md: 4 }, borderTop: "1px solid #ccc", pt: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '12px', md: '14px' } }}>
            Copyright © <b>Organick</b> | 2025
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
