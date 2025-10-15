import { Outlet } from "react-router-dom";
import Header from "./../Header/Header";
import Subscribe from "../../components/SectionSubscribe/Subscribe";
import Footer from "./../Footer/Footer";
import { Box, Container } from "@mui/material";

export default function Layout() {
  return (
    <Box sx={{
      maxWidth: "1920px",
      minHeight: "100vh",
      margin: "0 auto",
      padding: 0
    }}>
      <Header />
      <Container maxWidth={false} disableGutters>
        <Outlet />
      </Container>
      <Subscribe />
      <Footer />
    </Box>
  );
}
