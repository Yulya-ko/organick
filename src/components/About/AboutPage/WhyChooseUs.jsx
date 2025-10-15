import { Box, Typography } from "@mui/material";
import * as fonts from "../../../assets/fonts/fonts"; 
import GreenCircleIcon from "../../common/GreenCircleIcon";
import image from "../../../assets/images/about_page/image_choose.png";
import icon1 from "../../../assets/images/about_page/icons-about/return_policy_icon.png";
import icon2 from "../../../assets/images/about_page/icons-about/fresh_icon.png";
import icon3 from "../../../assets/images/about_page/icons-about/support_icon.png";
import icon4 from "../../../assets/images/about_page/icons-about/payment_icon.png";

import Cards from "./Cards";

function WhyChooseUs() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f9f8f8',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: { xs: '50px', md: '190px' },
        paddingBottom: { xs: '50px', md: '189px' },
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: '40px', md: '60px' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap-reverse',
            gap: { xs: '20px', md: '40px' }
          }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: '671px' }, padding: {xs: '10px', md: '0px'} }}>
            <Typography
              sx={{
                ...fonts.yellowtailRegular36,
                fontSize: { xs: "24px", md: "36px" },
                textAlign: { xs: 'center', md: 'start' }
              }}
            >
              Why Choose us?
            </Typography>

            <Typography
              sx={{
                ...fonts.robotoExtraBold50,
                fontSize: { xs: "28px", md: "50px" },
                lineHeight: { xs: "36px", md: "60px" },
                textAlign: { xs: "center", md: "start" },
                mt: '10px'
              }}
            >
              We do not buy from the <br />open market & traders.
            </Typography>

            <Typography
              sx={{
                ...fonts.openSansRegular18,
                    mt: '12px',
                    textAlign: { xs: 'center', md: 'start' }
              }}
            >
              We work directly with trusted local farmers to ensure freshness, transparency, and fair trade. Every ingredient is carefully selected straight from the source — no middlemen, no compromises.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '20px', md: '30px' }, mt: { xs: '20px', md: '36px' } }}>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: { xs: 'center', md: 'flex-start' }}}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '50px',
                    width: { xs: '80%', md: '339px' },
                    height: '81px',
                    backgroundColor: '#ececec',
                    padding: '0 20px',
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  <GreenCircleIcon size={20} />
                  <Typography
                    sx={{
                      ...fonts.robotoMedium20,
                      marginLeft: '10px'
                    }}
                  >
                    100% Natural Product
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...fonts.openSansRegular18,
                    maxWidth: { xs: '80%', md: '444px' },
                    mt: '12px',
                    textAlign: { xs: 'center', md: 'start' },
                    ml: {xs: 0, md: '60px'}
                  }}
                >
                  Our products are made from pure, organic ingredients — free from pesticides, chemicals, or artificial flavors. Naturally grown, naturally better.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '50px',
                    width: { xs: '80%', md: '339px' },
                    height: '81px',
                    backgroundColor: '#ececec',
                    padding: '0 20px',
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  <GreenCircleIcon size={20} />
                  <Typography
                    sx={{
                      ...fonts.robotoMedium20,
                      marginLeft: '10px'
                    }}
                  >
                    Increases resistance
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ...fonts.openSansRegular18,
                    maxWidth: { xs: '80%', md: '444px' },
                    mt: '12px',
                    textAlign: { xs: 'center', md: 'start' },
                    ml: {xs: 0, md: '60px'}

                  }}
                >
                  Nutritious and delicious, our organic foods help strengthen your body’s natural defenses. Every bite supports your well-being and boosts your energy the healthy way.
                </Typography>
              </Box>

            </Box>
          </Box>

          <Box
            sx={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: { xs: '100%', md: '678px' },
              height: { xs: '300px', md: '580px' },
              borderRadius: '30px',
              overflow: 'hidden'
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 },
            flexWrap: 'wrap',
            width: '100%',
            mt: { xs: '40px', md: '91px' }
          }}
        >
          <Cards icon={icon1} title="Return Policy" text="Easy returns with a quick and simple process." bgColor="#fff" />
          <Cards icon={icon2} title="100% Fresh" text="Guaranteed farm-fresh quality every time." bgColor="#fff" />
          <Cards icon={icon3} title="Support 24/7" text="We’re here for you anytime, anywhere" bgColor="#fff" />
          <Cards icon={icon4} title="Secured Payment" text="Safe and protected online transactions." bgColor="#fff" />
        </Box>
      </Box>
    </Box>
  );
}

export default WhyChooseUs;
