import { Box, Button, TextField } from "@mui/material";
import * as fonts from "../../assets/fonts/fonts";

function ChangeQuantity({ quantity, setQuantity }) {
  const addQuantity = () => setQuantity(quantity + 1);

  const removeQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // лише цифри
    setQuantity(value ? parseInt(value, 10) : 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Button sx={{ ...fonts.openSansBold18 }} onClick={addQuantity}>
        +
      </Button>

      <TextField
        value={quantity}
        onChange={handleInputChange}
        type="text"
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
          style: {
            textAlign: "center",
            fontWeight: 700,
            fontFamily: fonts.openSansBold18.fontFamily,
            fontSize: "16px",
          },
        }}
        sx={{
          width: { xs: "40px", md: "50px" },
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
            height: { xs: "30px", md: "50px" },
            "& fieldset": { border: "2px solid #274c5b" },
          },
        }}
      />

      <Button sx={{ ...fonts.openSansBold18 }} onClick={removeQuantity}>
        -
      </Button>
    </Box>
  );
}

export default ChangeQuantity;
