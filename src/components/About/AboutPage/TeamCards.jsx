import { Box, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import * as fonts from "../../../assets/fonts/fonts";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const TeamCards = ({ image, title, text }) => {
  return (
    <Card
      sx={{
        maxWidth: {xs: 350, md: 450},
        borderRadius: "30px",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-10px)" },
      }}
    >
      <CardMedia component="img" image={image} alt={title} sx={{ height: {xs: 350, md: 486}}}/>
      <CardContent sx={{ textAlign: "start", py: 3, pl: "28px" }}>
        <Typography sx={{ ...fonts.robotoExtraBold25 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography
          sx={{
            ...fonts.yellowtailRegular22,
            mb: 2,
          }}
        >
          {text}
        </Typography>
        <Box sx={{ display: "flex", gap: "16px", mt: 1 }}>
          <IconButton
            sx={{
              p: 0,
              "&:hover": { color: "#7EB693", transform: "scale(1.2)" },
              transition: "all 0.3s ease",
            }}
          >
            <InstagramIcon sx={{ fontSize: "22px" }} />
          </IconButton>
          <IconButton
            sx={{
              color: "#274C5B",
              p: 0,
              "&:hover": { color: "#7EB693", transform: "scale(1.2)" },
              transition: "all 0.3s ease",
            }}
          >
            <FacebookIcon sx={{ fontSize: "22px" }} />
          </IconButton>
          <IconButton
            sx={{
              color: "#274C5B",
              p: 0,
              "&:hover": { color: "#7EB693", transform: "scale(1.2)" },
              transition: "all 0.3s ease",
            }}
          >
            <TwitterIcon sx={{ fontSize: "22px" }} />
          </IconButton>
        </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamCards;
