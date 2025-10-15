import { Box } from "@mui/material"
import BannerShop from "../components/Shop/BannerShop"
import CardsShopProducts from "../components/Shop/CardsShopProducts"

function Shop() {
    return (
        <Box>
            <BannerShop/>
            <CardsShopProducts/>
        </Box>
    )
}

export default Shop