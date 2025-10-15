import { Box, Typography } from "@mui/material";
import * as fonts from "../../../assets/fonts/fonts";
import TeamCards from "./TeamCards";
import imageOne from "../../../assets/images/about_page/experts_about/img_man.jpg";
import imageTwo from "../../../assets/images/about_page/experts_about/img_girlOne.jpg";
import imageThree from "../../../assets/images/about_page/experts_about/img_girlTwo.jpg";

function TeamExperts() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, mb: '50px' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography
          sx={{
            ...fonts.yellowtailRegular36,
            fontSize: { xs: "24px", md: "36px" },
          }}
        >
          Team
        </Typography>

        <Typography
          sx={{
            ...fonts.robotoExtraBold50,
            fontSize: { xs: "28px", md: "50px" },
            mt: "10px",
          }}
        >
          Our Organic Experts
        </Typography>

        <Typography
          sx={{
            ...fonts.openSansRegular18,
            pt: { xs: "12px", md: "16px" },
            fontSize: { xs: "14px", md: "18px" },
            maxWidth: "852px",
          }}
        >
          Meet the passionate people behind our brand — dedicated professionals who bring knowledge, care, and innovation to everything we grow and create.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <TeamCards
          image={imageOne}
          title="Giovani Bacardo"
          text="Farmer"
        />
        <TeamCards
          image={imageTwo}
          title="Marianne Loreno"
          text="Designer"
        />
        <TeamCards
          image={imageThree}
          title="Riga Pelore"
          text="Farmer"
        />
      </Box>
    </Box>
  );
}

export default TeamExperts;
