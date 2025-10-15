import { Box, Typography } from "@mui/material"
import * as fonts from "../../assets/fonts/fonts";


function LocationCards({icon, title, address, city}) {
    return (
        <Box sx={{ maxWidth: '312px'}}>
            <Box sx={{display: 'flex', gap: '6px'}}>
                <Box
                    component="img"
                    src={icon}
                    alt={title}
                    sx={{
                    width: "50px",
                    height: "50px",
                    border: 'none',
                    objectFit: "contain",
                    }}
                />   
                <Box>
                    <Typography sx={{ ...fonts.openSansSemiBold18}}>{title}</Typography>
                    <Typography sx={{ ...fonts.openSansRegular18}}>{address}</Typography>
                    <Typography sx={{ ...fonts.openSansRegular18}}>{city}</Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default LocationCards