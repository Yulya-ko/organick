import { Box, Typography } from "@mui/material"
import Filter from "./Filter"
import * as fonts from "../../assets/fonts/fonts"


function AllCategories() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '30px'}}>
            <Typography sx={{
                ...fonts.openSansBold25
            }}>
                Categories: 
            </Typography>
            <Typography sx={{ 
                display: 'flex', 
                gap: {xs: '10px', md: '20px'}, 
                ...fonts. openSansBold33,
                // transition: { md: "all 0.3s ease" },
                cursor: "pointer",
                // "&:hover": { backgroundColor: { xs: "transparent", md: "#f0f5f0" } },
            }}>
                {['All', 'Vegetables', 'Fruits', 'Nuts & Seeds', 'Dairy & Eggs'].map(category => <Filter category={category} />)}
            </Typography>
        </Box>
    )
}

export default AllCategories