import { Box, TextField, Button, Grid } from "@mui/material";
import * as fonts from "../../assets/fonts/fonts";
import { useState } from "react";


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    } 

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 1184,
        mx: "auto",
        mt: "80px",
        mb: '120px',
        display: "flex",
        flexDirection: "column",
        padding: {xs: '0px 15px', md: 0},
        gap: 3,
      }}
    >
      <Grid container spacing='46px'>
        <Grid item xs={12} md={6} width={569}>
          <TextField
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Email Address"
            fullWidth
            required
             slotProps={{
                inputLabel: {
                sx: { ...fonts.robotoSemiBold18 },
                },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": { borderColor: "#E0E0E0" },
                "&:hover fieldset": { borderColor: "#274C5B" },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} width={569}>
          <TextField
            label="Your Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@yourmail.com"
            fullWidth
            required
            slotProps={{
                inputLabel: {
                sx: { ...fonts.robotoSemiBold18 },
                },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": { borderColor: "#E0E0E0" },
                "&:hover fieldset": { borderColor: "#274C5B" },
              },
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing="46px">
        <Grid item xs={12} md={6} width={569}>
          <TextField
            label="Company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="yourcompany name here"
            fullWidth
            required
            slotProps={{
                inputLabel: {
                sx: { ...fonts.robotoSemiBold18 },
                },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": { borderColor: "#E0E0E0" },
                "&:hover fieldset": { borderColor: "#274C5B" },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} width={569}>
          <TextField
            label="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="how can we help"
            fullWidth
            required
            slotProps={{
                inputLabel: {
                sx: { ...fonts.robotoSemiBold18 },
                },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": { borderColor: "#E0E0E0" },
                "&:hover fieldset": { borderColor: "#274C5B" },
              },
            }}
          />
        </Grid>
      </Grid>

      <TextField
        label="Message"
        type="text"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="hello there, I would like to talk about how to..."
        multiline
        rows={4}
        fullWidth
        required
        slotProps={{
                inputLabel: {
                sx: { ...fonts.robotoSemiBold18 },
                },
            }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": { borderColor: "#E0E0E0" },
            "&:hover fieldset": { borderColor: "#274C5B" },
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
                backgroundColor: '#274c5b',
                ...fonts.robotoBold_color20,
                borderRadius: 2,
                padding: { xs: '20px 30px', md: '28px 29px' },
                mt: { xs: 2, md: 2.875 },
                textTransform: 'none',
                width: { xs: '100%', md: 228 },
                height: { xs: 60, md: 80 },
                '&:hover': {
                  backgroundColor: '#1f3f4a',
                },
              }}
      >
        Send Message
      </Button>
    </Box>
  );
}
