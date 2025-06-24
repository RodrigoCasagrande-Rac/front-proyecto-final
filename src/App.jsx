import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePages";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import PageError from "./components/pages/PageError";
import GaleryProducts from "./components/pages/GaleryProducts";

const App = () => {
  return (
    <>
      <Router>
        <NavbarC />
        <Routes>
          <Route path="/galeria-productos/:id" element={<GaleryProducts />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
