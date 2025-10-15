import { Box, Typography, Avatar, Divider } from "@mui/material";
import image from '../../assets/images/home_page/testimonials/bg_image.jpg';
import avatarImage from '../../assets/images/home_page/testimonials/avatar.png';
import Stars from "../common/Stars";
import * as fonts from "../../assets/fonts/fonts"; 
import CircleCard from "./CircleCard";

export default function Testimonial() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: { xs: '50px', md: "164px" },
        pb: {xs: '50px', md: '164px'},
        minHeight: "80vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 0.5, md: 1 } }}>
        <Typography sx={{ ...fonts.yellowtailRegular36, fontSize: { xs: '30px', md: '36px' } }}>
          Testimonial
        </Typography>
        <Typography sx={{ 
          ...fonts.robotoExtraBold50, 
          fontSize: { xs: '28px', sm: '35px', md: '50px' },
          textAlign: 'center' 
        }}>
          What Our Customer Saying?
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: { xs: 5, md: 7.5 }, gap: { xs: 1.5, md: 2.5 }, maxWidth: 1100, mx: 'auto' }}>
        <Avatar alt="Sara Taylor" src={avatarImage} sx={{ width: { xs: 60, md: 115 }, height: { xs: 60, md: 115 } }} />

        <Stars />

        <Typography sx={{ 
          ...fonts.openSansRegular18, 
          pt: 1.75, 
          textAlign: 'center', 
          maxWidth: 780, 
          width: '90%',
          fontSize: { xs: '14px', md: '18px' },
          lineHeight: { xs: '20px', md: '28px' }
        }}>
          “I’ve never tasted such fresh and flavorful organic products before! The quality is truly exceptional, and I love knowing that everything comes from trusted local farmers. Highly recommend!”
        </Typography>

        <Typography sx={{ ...fonts.robotoSemiBold25, fontSize: { xs: '18px', md: '25px' } }}>
          Sara Taylor
        </Typography>

        <Typography sx={{ ...fonts.openSansRegular15, mt: '-16px', textAlign: 'center', fontSize: { xs: '12px', md: '15px' } }}>
          Consumer
        </Typography>

        <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 } }}>
          <Box sx={{ color: "#c4c4c4", width: 6, height: 6, borderRadius: '50%' }}>●</Box>
          <Box sx={{ color: "#7eb693", width: 6, height: 6, borderRadius: '50%' }}>●</Box>
          <Box sx={{ color: "#c4c4c4", width: 6, height: 6, borderRadius: '50%' }}>●</Box>
        </Box>

        <Divider sx={{ border: '1px solid #e0e0e0', width: '100%', maxWidth: 1108, mt: { xs: 6, md: 12.5 } }} />

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',         
            sm: '1fr 1fr',     
            md: '1fr 1fr 1fr 1fr'
          },
          gap: { xs: '30px', md: '60px' }, 
          justifyItems: 'center', 
          mt: {xs: '50px', md: '102px'},
        }}>
        <CircleCard title='100%' text='Organic'/>
        <CircleCard title='285' text='Active Product'/>
        <CircleCard title='350+' text='Organic Orchads'/>
        <CircleCard title='25+' text='Years of Farming'/>
        </Box>
      </Box>
    </Box>
  );
}
