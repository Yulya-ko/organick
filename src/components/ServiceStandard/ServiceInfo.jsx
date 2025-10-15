import { Box, Typography } from "@mui/material";
import image1 from "../../assets/images/service_page/pic1.jpg";
import image2 from "../../assets/images/service_page/pic2.jpg";
import * as fonts from "../../assets/fonts/fonts";

function ServiceInfo() {
  return (
    <Box sx={{ maxWidth: "940px", mx: "auto", mt: "80px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          mb: { xs: "30px", md: "70px" },
          padding: {xs: '0px 15px', md: 0}
        }}
      >
        <Typography
          sx={{ ...fonts.robotoExtraBold50, fontSize: { xs: "35px", md: "50px" } }}
        >
          Organic Store Services
        </Typography>
        <Typography sx={{ ...fonts.openSansRegular18 }}>
          We provide a wide range of services to make your organic shopping experience easy and enjoyable. From fresh farm-to-table products to expert advice on healthy living, we’ve got you covered.
        </Typography>
        <Typography sx={{ ...fonts.openSansRegular18 }}>
          Our team ensures quality, freshness, and sustainability in every product, helping you make better choices for yourself and the planet.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "20px", md: "28px" },
          padding: {xs: '0px 15px', md: 0}

        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${image1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: { xs: "100%", md: "379px" },
              height: { xs: "220px", md: "252px" },
              borderRadius: "20px",
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "537px" },
              p: { xs: "25px 20px", md: "63px 45px" },
              backgroundColor: "#f9f8f8",
              borderRadius: "20px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography sx={{ ...fonts.robotoMedium25 }}>Why Organic</Typography>
            <Typography sx={{ ...fonts.openSansRegular18, mt: "7px" }}>
              Choosing organic means healthier food for you and a cleaner planet for everyone. Our products are grown naturally, without chemicals or artificial additives.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "537px" },
              p: { xs: "25px 20px", md: "63px 45px" },
              backgroundColor: "#f9f8f8",
              borderRadius: "20px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography sx={{ ...fonts.robotoMedium25 }}>
              Speciality Produce
            </Typography>
            <Typography sx={{ ...fonts.openSansRegular18, mt: "7px" }}>
              We offer unique, high-quality organic produce that you won’t find in regular stores — fresh, flavorful, and carefully sourced.
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundImage: `url(${image2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: { xs: "100%", md: "379px" },
              height: { xs: "220px", md: "252px" },
              borderRadius: "20px",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ mt: { xs: "30px", md: "70px" } }}>
        <Box sx={{ padding: { xs: "20px", md: 0 } }}>
          <Typography
            sx={{
              ...fonts.robotoExtraBold35,
              fontSize: { xs: "25px", md: "35px" },
            }}
          >
            We farm your land
          </Typography>
          <Typography sx={{ ...fonts.openSansRegular18, mt: "11px" }}>
           We take pride in cultivating your land with care and expertise. Using sustainable farming practices, we ensure that every crop grows healthy and strong, preserving the soil and the environment for future generations. Our team combines traditional knowledge with modern techniques to maximize yield naturally, without harmful chemicals or shortcuts. With us, your land produces not just food, but high-quality, nutritious, and organic crops you can trust.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: "20px", md: "59px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
            gap: "28px",
            padding: { xs: "10px", md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "25px",
              alignItems: "center",
              backgroundColor: "#f9f8f8",
              borderRadius: "100px",
              maxWidth: "390px",
              padding: "15px 53px 15px 17px",
            }}
          >
            <Typography
              sx={{
                ...fonts.robotoBold_color25,
                fontSize: { xs: "18px", md: "25px" },
                backgroundColor: "#7eb693",
                borderRadius: "100%",
                padding: "20px",
              }}
            >
              01
            </Typography>
            <Typography
              sx={{ ...fonts.robotoMedium25, fontSize: { xs: "18px", md: "25px" } }}
            >
              Best quality support
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "25px",
              alignItems: "center",
              backgroundColor: "#f9f8f8",
              borderRadius: "100px",
              maxWidth: "390px",
              padding: "15px 53px 15px 17px",
            }}
          >
            <Typography
              sx={{
                ...fonts.robotoBold_color25,
                fontSize: { xs: "18px", md: "25px" },
                backgroundColor: "#7eb693",
                borderRadius: "100%",
                padding: "20px",
              }}
            >
              02
            </Typography>
            <Typography
              sx={{ ...fonts.robotoMedium25, fontSize: { xs: "18px", md: "25px" } }}
            >
              Money back guarantee
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceInfo;
