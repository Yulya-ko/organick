import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowButtonIcon from "../Icons/ArrowForwardIcon";
import * as fonts from "../../assets/fonts/fonts"; 

export default function DarkBtn({ text, to }) {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      size="large"
      endIcon={<ArrowButtonIcon />}
      sx={{
        backgroundColor: '#274c5b',
        ...fonts.robotoBold_color20,
        borderRadius: 2,
        padding: { xs: '10px 30px', md: '28px 35px' },
        mt: { xs: 2, md: 2.875 },
        textTransform: 'none',
        width: { xs: '100%', sm: '40%', md: 220 },
        height: { xs: 60, md: 79 },
        '&:hover': {
          backgroundColor: '#234C6A',
        },
      }}
    >
      {text}
    </Button>
  );
}
