import { Box } from "@mui/material"
import BannerContactUs from "../components/ContactUs/BannerContactUs"
import ContactUsInfo from "../components/ContactUs/ContactUsInfo"
import ContactUsLocation from "../components/ContactUs/ContactUsLocation"
import ContactForm from "../components/ContactUs/ContactForm"

function Contacts() {
    return (
        <Box>
            <BannerContactUs/>
            <ContactUsInfo/>
            <ContactUsLocation/>
            <ContactForm/>
        </Box>
    )
}

export default Contacts