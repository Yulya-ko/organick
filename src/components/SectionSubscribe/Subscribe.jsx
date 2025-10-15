import { Box, Typography, TextField, Button } from "@mui/material";
import bgImage from './../../assets/images/home_page/subscribe/bg_image.jpg';
import * as fonts from "../../assets/fonts/fonts"; 
import { useState, useEffect } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");
    setSubscribed(storedEmails.length > 0);
  }, []);

  const handleSubscribeToggle = () => {
    const storedEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");

    if (!subscribed) {
      if (!email || !email.includes("@") || !email.includes(".")) {
        setError("Please enter a valid email");
        setMessage("");
        return;
      }
      setError("");
      setSubscribed(true);
      setMessage("Thank you for subscribing!");

      if (!storedEmails.includes(email)) {
        storedEmails.push(email);
        localStorage.setItem("subscribedEmails", JSON.stringify(storedEmails));
      }

      setEmail("");

    } else {
      const filteredEmails = storedEmails.filter(e => e !== email);
      localStorage.setItem("subscribedEmails", JSON.stringify(filteredEmails));
      setSubscribed(false);
      setMessage("You have unsubscribed.");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: {xs: '50px', md: '141px'},
        pb: { xs: '50px', md: '117px' },
        px: { xs: 2, md: 0 },
      }}
    >
      <Box 
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: { xs: '100%', md: '1400px' },
          height: { xs: 'auto', md: '323px' },
          borderRadius: '30px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
          py: { xs: 8, md: 0 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
           sx={{
            ...fonts.robotoExtraBold_color50,
            fontSize: { xs: '32px', md: '50px' }, 
            width: { xs: '100%', md: '357px' },
            lineHeight: 1.2,
            mb: { xs: 6, md: 0 },
            textAlign: { xs: 'center', md: 'start' },
          }}
        >
          Subscribe to our Newsletter
        </Typography>

        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 1 },
            width: { xs: '100%', sm: 'auto' },
            height: '100px',
            justifyContent: { xs: 'center', md: 'flex-start' },
            ml: { xs: 0, md: '326px' }
          }}
        >            
          <TextField
            placeholder="Your Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error || message}
            sx={{
              width: { xs: '100%', sm: 349 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                backgroundColor: "#fff",
                height: {xs: 60,md: 80},
                "& fieldset": { border: "none" }
              },
              ...fonts.robotoItalic21,
            }}
          />

          <Button
            onClick={handleSubscribeToggle}
            sx={{
              color: '#fff',
              ...fonts.robotoBold_color20,
              backgroundColor: subscribed ? '#456882' : '#274c5b',
              borderRadius: '16px',
              width: { xs: '100%', sm: 220 },
              height: {xs: 60, md: 80},
              textTransform: 'none',
              mt: { xs: 2, sm: 0 }
            }}
          >
            {subscribed ? "Unsubscribe" : "Subscribe"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
