import { Box, Typography } from "@mui/material";
import Products from "../Products/Products";
import * as fonts from "../../assets/fonts/fonts"; 

export default function Categories() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center', pt: { xs: "50px", md: "176px" }, minHeight: "100vh" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: '4px', md: '8px' }, px: { xs: 2, md: 0 }, pb: '20px' }}>
                <Typography sx={{ ...fonts.yellowtailRegular36, fontSize: { xs: '30px', md: '36px' } }}>
                    Categories
                </Typography>
                <Typography
                    sx={{
                        ...fonts.robotoExtraBold50,
                        fontSize: { xs: '28px', sm: '35px', md: '50px' },
                        lineHeight: { xs: '36px', md: '60px' },
                        textAlign: 'center'
                    }}
                >
                    Our Products
                </Typography>
            </Box>
            <Box sx={{maxWidth: '1600px'}}>
                <Products />
            </Box>
        </Box>
    );
}
