import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";
import ContactUsInfoCards from "./ContactUsInfoCards";
import image from "../../assets/images/contacts_page/imageOne.png";
import icon1 from "../../assets/images/contacts_page/email-icon.png";
import icon2 from "../../assets/images/contacts_page/phone-icon.png";
import * as fonts from "../../assets/fonts/fonts";

const socialButtonStyle = {
  width: { xs: 45, sm: 55 },
  height: { xs: 45, sm: 55 },
  backgroundColor: "#eff6f1",
  color: "#274c5b",
};

export default function ContactUsInfo() {
  return (
    <Box
      sx={{
        maxWidth: "1400px",
        mx: "auto",
        mt: { xs: "50px", md: "209px" },
        px: { xs: 2, sm: 4 }, 
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 4, md: 6 }, 
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { xs: "100%", sm: "400px", md: "45%", lg: "623px" },
            height: { xs: "220px", sm: "350px", md: "500px", lg: "640px" },
            borderRadius: "20px",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              ...fonts.robotoExtraBold50,
              fontSize: { xs: "24px", sm: "32px", md: "50px" },
              lineHeight: 1.2,
              pb: "14px",
            }}
          >
            We'd love to talk about how we can work together.
          </Typography>

          <Typography
            sx={{
              ...fonts.openSansRegular18,
              fontSize: { xs: "16px", md: "18px" },
              px: { xs: 1, md: 0 },
            }}
          >
           We are always excited to explore new opportunities and partnerships. Whether you’re looking to collaborate on a project, have questions about our products, or want to share ideas, our team is ready to listen and work with you.

          </Typography>
        
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "17px",
              pt: "34px",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <ContactUsInfoCards icon={icon1} title="Message" text="support@organic.com" />
            <ContactUsInfoCards icon={icon2} title="Call Us" text="+01 123 456 789" />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, md: 2 },
              justifyContent: { xs: "center", md: "flex-start" },
              pt: "34px",
              flexWrap: "wrap", 
            }}
          >
            <IconButton sx={socialButtonStyle}><Instagram /></IconButton>
            <IconButton sx={socialButtonStyle}><Facebook /></IconButton>
            <IconButton sx={socialButtonStyle}><Twitter /></IconButton>
            <IconButton sx={socialButtonStyle}><Pinterest /></IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
