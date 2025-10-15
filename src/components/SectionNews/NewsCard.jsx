import { Box, Typography } from "@mui/material";
import imageOne from './../../assets/images/home_page/news/image_one.jpg';
import imageTwo from './../../assets/images/home_page/news/image_two.jpg';
import PersonIcon from "@mui/icons-material/Person";
import * as fonts from "../../assets/fonts/fonts"; 
import YellowBtn from "../common/YellowBtn";

export default function NewsCard() {
  const cards = [
    {
      image: imageOne,
      title: "The Benefits of Vitamin D & How to Get It",
      author: "By Rachi Card",
      date: "25",
      month: "Nov",
      text: "Vitamin D plays a key role in keeping your bones strong and your immune system healthy. You can get it naturally from sunlight, eggs, and fortified organic foods."
    },
    {
      image: imageTwo,
      title: "Our Favourite Summertime Tommeto",
      author: "By Rachi Card",
      date: "25",
      month: "Nov",
      text: "Juicy, sweet, and full of nutrients — tomatoes are the heart of summer! Discover how to pick, store, and cook them for the best natural flavor."
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        pt: { xs: '30px', md: '48px' },
        pb: { xs: '30px', md: '100px'},
        gap: { xs: '30px', md: '30px' }
      }}
    >
      {cards.map((card, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            width: { xs: '100%', md: '677px' },
            minHeight: { xs: '450px', md: '524px' },
            backgroundImage: `url(${card.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '30px'
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: 20, md: 45 },
              left: { xs: 20, md: 30 },
              width: { xs: 60, md: 82 },
              height: { xs: 60, md: 82 },
              borderRadius: "50%",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#274c5b"
            }}
          >
            <Typography sx={{ ...fonts.robotoExtraBold25, fontSize: { xs: 16, md: 25 } }}>
              {card.date}
            </Typography>
            <Typography sx={{ ...fonts.robotoExtraBold20, mt: '-6px', fontSize: { xs: 12, md: 20 } }}>
              {card.month}
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: { xs: 130, md: 260 },
              left: { xs: 20, md: 45 },
              right: { xs: 20, md: 'auto' },
              maxWidth: {xs: 'auto', md: '513px'},
              height: {xs: 'auto', md: '330px'},
              backgroundColor: "#fff",
              borderRadius: "30px",
              padding: { xs: '30px 20px', md: '46px 37px 60px' },
              boxShadow: '0 20px 35px 0 rgba(167, 167, 167, 0.25)'
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <PersonIcon sx={{ color: "#efd372", fontSize: { xs: 20, md: 24 } }} />
              <Typography sx={{ ...fonts.robotoRegular18, fontSize: { xs: 14, md: 18 } }}>
                {card.author}
              </Typography>
            </Box>

            <Typography sx={{ mb: 1, ...fonts.robotoExtraBold25, fontSize: { xs: 18, md: 25 } }}>
              {card.title}
            </Typography>

            <Typography sx={{ mb: 2, ...fonts.openSansRegular18, fontSize: { xs: 14, md: 18 } }}>
              {card.text}
            </Typography>

            <YellowBtn 
              text="Read More" 
              to="/services" 
            /> 
          </Box>
        </Box>
      ))}
    </Box>
  );
}
