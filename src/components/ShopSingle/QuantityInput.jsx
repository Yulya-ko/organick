import { Input } from "@mui/material";

export default function QuantityInput({ quantity, setQuantity }) {
  const MAX_QUANTITY = 20;

  const handleChange = (e) => {
    let value = e.target.value;

    if (value === "") {
      setQuantity("");
      return;
    }

    value = value.replace(/\D/g, "");
    const number = parseInt(value, 10);

    if (number >= 1 && number <= MAX_QUANTITY) {
      setQuantity(String(number));
    }

    if (number > MAX_QUANTITY) {
      setQuantity(String(MAX_QUANTITY));
    }
  };

  const handleBlur = () => {
    if (quantity === "" || parseInt(quantity, 10) < 1) {
      setQuantity("1");
    }
  };

  return (
    <Input
      type="number"
      disableUnderline
      value={quantity}
      onChange={handleChange}
      onBlur={handleBlur}
      inputProps={{
        min: 1,
        max: MAX_QUANTITY,
        style: { textAlign: "center" },
      }}
      sx={{
        width: "134px",
        height: { xs: "60px" ,md: "80px"},
        borderRadius: "16px",
        border: "2px solid #274c5b",
        fontSize: "24px",
        color: "#274c5b",
        "& input": {
          MozAppearance: "textfield",
          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
        },
      }}
    />
  );
}
