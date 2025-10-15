import { Box } from "@mui/material"
import BannerAboutUs from "../components/About/AboutPage/BannerAboutUs"
import AboutUs from "../components/About/AboutPage/AboutUs"
import WhyChooseUs from "../components/About/AboutPage/WhyChooseUs"
import TeamExperts from "../components/About/AboutPage/TeamExperts"
import AboutOffer from "../components/About/AboutPage/AboutOffer"

function About() {
    return (
        <Box>
            <BannerAboutUs />
            <AboutUs />
            <WhyChooseUs />
            <TeamExperts />
            <AboutOffer/>
        </Box>
    )
}

export default About