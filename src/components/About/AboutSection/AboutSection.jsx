import { Box, Typography } from "@mui/material";
import image from '../../../assets/images/home_page/about/image.png';
import iconBowl from '../../../assets/images/home_page/about/bowlIcon.png';
import iconPost from '../../../assets/images/home_page/about/postboxIcon.png';
import InfoCard from './InfoCard';
import DarkBtn from "../../common/DarkBtn";
import * as fonts from "../../../assets/fonts/fonts"; 

export default function AboutSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#F9F8F8',
        pt: {xs: '50px', md: '186px'},
        pb: {xs: '80px', md: '186px'}
      }}
    >
      <Box sx={{ display: 'flex', gap: '20px',justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}}}>
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { xs: '40%', sm: '60%', md: '900px' },
            height: { xs: '200px', sm: '400px', md: '850px' },
          }}
        />

        <Box sx={{ width: {xs: '95%', md: '702px'} }}>
          <Typography sx={{ ...fonts.yellowtailRegular36, pb: 1, fontSize: { xs: '30px', md: '36px' }, textAlign: {xs: 'center', md: 'start'} }}>
            About Us
          </Typography>

          <Typography sx={{ ...fonts.robotoExtraBold50, fontSize: { xs: '28px', sm: '35px', md: '50px' }, lineHeight: 1.2, textAlign: {xs: 'center', md: 'start'}}}>
            We Believe in Working Accredited Farmers
          </Typography>

          <Typography sx={{ ...fonts.openSansRegular18, pt: 1.75, fontSize: { xs: '16px', md: '18px' }, lineHeight: { xs: '22px', md: '28px' }, textAlign: {xs: 'center', md: 'start'}}}>
            We partner only with trusted, certified farmers who share our passion for sustainable and ethical agriculture. Every product we offer is grown with care, respecting nature and people.
          </Typography>

          <Box sx={{ width: { xs: '100%', md: 564 }, mt: { xs: '30px', md: '46px' }, mb: '46px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <InfoCard
              icon={iconBowl}
              title="Organic Foods Only"
              description="We believe that real taste comes from pure ingredients. That’s why all our products are 100% organic, free from chemicals, and naturally rich in nutrients."
            />
            <InfoCard
              icon={iconPost}
              title="Quality Standards"
              description="Quality is at the heart of everything we do. From the fields to your table, we carefully control every step to ensure freshness, safety, and exceptional flavor."
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'}}}>
          <DarkBtn 
            text="Show More"
            to="/about"
          />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
