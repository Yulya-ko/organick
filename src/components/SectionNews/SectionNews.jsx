import { Box, Typography } from "@mui/material";
import NewsCard from "./NewsCard";
import * as fonts from "../../assets/fonts/fonts"; 
import WhiteBtn from "../common/WhiteBtn";

export default function SectionNews() {
    return (
        <Box sx={{
            maxWidth: '1400px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: { xs: '80px 16px', md: '177px 260px' }
        }}>
            <Box>
                <Typography
                    sx={{
                        ...fonts.yellowtailRegular36,
                        pb: { xs: '4px', md: '8px' }
                    }}
                >
                    News
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        // gap: { xs: '16px', md: '478px' },
                        alignItems: { xs: 'flex-start', md: 'center' }
                    }}
                >
                    <Typography
                        sx={{
                            ...fonts.robotoExtraBold50,
                            textAlign: 'start',
                            mb: { xs: 2, md: 3 },
                            lineHeight: '1.2',
                            width: { xs: '100%', md: '702px' },
                            fontSize: { xs: '28px', md: '50px' }
                        }}
                    >
                        Discover weekly content about organic food, & more
                    </Typography>
                    
                    

                    <WhiteBtn
                        text="More News" 
                        to="/about" 
                    />
                </Box>
            </Box>

            <NewsCard />
        </Box>
    );
}
