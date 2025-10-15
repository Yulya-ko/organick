import { Box, Typography } from '@mui/material';
import bg_image from '../../assets/images/shop_single/bg_image.jpg';
import * as fonts from "../../assets/fonts/fonts";

export default function BannerShopSingle() {
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
                Shop Single
            </Typography>
        </Box>
    )
}