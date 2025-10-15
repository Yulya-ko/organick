import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import ShopSinglePage from "./pages/ShopSinglePage";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import './styles/App.css';

export default function App() {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ShopSinglePage />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
      </>

  );
}
