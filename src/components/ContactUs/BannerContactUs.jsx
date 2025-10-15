import { Box, Typography } from '@mui/material';
import bg_image from '../../assets/images/contacts_page/bg_image.jpg';
import * as fonts from "../../assets/fonts/fonts";


function BannerContactUs() {
    return (
        <Box 
        sx={{
                backgroundImage: `url(${bg_image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: {xs: '250px', md: "450px"},
                position: 'relative'
        }}>

            <Typography
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                ...fonts.robotoExtraBold70,
                fontSize: { xs: "30px", sm: '50px', md: "70px" },
            }}>
                Contact Us
            </Typography>
        </Box>
    )
}

export default BannerContactUs;