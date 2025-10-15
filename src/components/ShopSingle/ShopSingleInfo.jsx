import { Box, Typography, Button } from "@mui/material";
import * as fonts from "../../assets/fonts/fonts";

export default function ShopSingleInfo() {
    return (
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column-reverse', md: 'column'}, alignItems: 'center', mt: '75px'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: "column", md: 'row'},
                    justifyContent: 'center',
                    gap: '20px',
                    mb: '27px'
                }}>
                <Button 
                sx={{
                    width: {xs: '100%', md: '386px'},
                    height: '80px',
                    backgroundColor: '#274c5b',
                    textAlign: 'center',
                    ...fonts.openSansBold_color25,
                    fontSize: { xs: "20px", md: '25px'},
                    textTransform: 'none',
                    border: 'none',
                    borderRadius: '16px',
                    padding: {xs: '10px'}

                }}>
                    Product Description
                </Button>
                <Button
                sx={{
                    width: {xs: '100%', md: '386px'},
                    height: '80px',
                    backgroundColor: '#eff6f1',
                    textAlign: 'center',
                    ...fonts.openSansBold25,
                    fontSize: { xs: "20px", md: '25px'},
                    textTransform: 'none',
                    border: 'none',
                    borderRadius: '16px',
                    padding: {xs: '10px'}

                }}>
                    Additional Info
                </Button>
                </Box>
                <Box>
                    <Typography 
                    variant="body1"
                    sx={{ mb: "35px", ...fonts.openSansRegular18, width: {xs: '100%', md:'1137px'}, textAlign: 'center', padding: {xs: '10px'}}}>
                        Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
                    </Typography>
                </Box>
        </Box>
    )
}