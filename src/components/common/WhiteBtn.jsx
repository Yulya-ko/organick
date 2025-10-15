import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowButtonIcon from "../Icons/ArrowForwardIcon";
import * as fonts from "../../assets/fonts/fonts";

export default function WhiteBtn({ text, to }) {
    return (
        <Button
            component={Link}
            to={to}
            variant="contained"
            size="large"
            endIcon={<ArrowButtonIcon />}
            sx={{
                backgroundColor: '#fff',
                ...fonts.robotoBold20,
                borderRadius: 2,
                border: '2px solid #274c5b',
                padding: { xs: '10px 30px', md: '28px 35px' },
                mt: { xs: 2, md: 2.875 },
                textTransform: 'none',
                width: { xs: '100%', sm: '38%', md: 220 },
                height: { xs: 60, md: 79 },
                '&:hover': {
                    backgroundColor: '#efd372'
                },
            }}
        >
            {text}
        </Button>
    )
}
