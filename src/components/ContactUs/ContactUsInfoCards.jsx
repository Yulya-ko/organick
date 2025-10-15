import { Box, Typography } from "@mui/material";
import * as fonts from "../../assets/fonts/fonts";

export default function ContactUsInfoCards({ icon, title, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        borderRadius: "16px",
        border: "1px solid #eee",
        width: "352px",
        height: "113px",
        p: "12px",
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{
          width: "89px",
          height: "89px",
          borderRadius: "11px",
          objectFit: "contain",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ ...fonts.robotoExtraBold25 }}>{title}</Typography>
        <Typography sx={{ ...fonts.openSansRegular18 }}>{text}</Typography>
      </Box>
    </Box>
  );
}
