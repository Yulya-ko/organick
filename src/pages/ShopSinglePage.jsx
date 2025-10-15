import { Box } from "@mui/material";
import RelatedProducts from "../components/ShopSingle/RelatedProducts";
import SingleProduct from "../components/ShopSingle/SingleProduct";
import ShopSingleInfo from "../components/ShopSingle/ShopSingleInfo";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ShopSingle from "../components/ShopSingle/BannerShopSingle";

export default function ShopSinglePage() {
  const { id } = useParams(); // отримуємо id з URL
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box>
        <ShopSingle/>
      <SingleProduct product={product} />
      <ShopSingleInfo product={product} />
      <RelatedProducts currentProductId={product.id} />
    </Box>
  );
}
