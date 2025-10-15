import { Box, Typography } from "@mui/material";
import * as fonts from "../../assets/fonts/fonts";

export default function CircleCard({ title, text }) {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        border: "4px solid #7eb693",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: 160, sm: 180, md: 211 }, 
        height: { xs: 160, sm: 180, md: 211 }, 
        backgroundColor: "#f1f1f1",
        mx: "auto", 
      }}
    >
      <Box sx={{ textAlign: "center", p: {xs: '10px', md: 0} }}>
        <Typography
          sx={{
            ...fonts.robotoExtraBold50,
            fontSize: { xs: 32, md: 50 },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            ...fonts.openSansSemiBold18,
            fontSize: { xs: 16, md: 18 },
            mt: '-10px'
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
