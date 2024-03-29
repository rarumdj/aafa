import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// eslint-disable-next-line
import "swiper/css/bundle";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Navbar, Footer } from "./components";
import { About, Home, OurService } from "./pages";
import { Works } from "./containers/work";
import { Programs } from "./containers/programs";
import { Contact } from "./containers/home";
import PressReview from "./pages/PressReview";

function App() {
  const location = useLocation();

  useEffect(
    () => {
      const html = document.querySelector("html");

      html.style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      html.style.scrollBehavior = "";
    },
    [location.pathname]
    // []
  );

  const DefaultRoutes = () => {
    return (
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<OurService />}></Route>
            <Route path="/ourwork" element={<Works />}></Route>
            <Route path="/programs" element={<Programs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            {/* <Route path="/press-reviews" element={<PressReview />}></Route> */}
          </Routes>
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<DefaultRoutes />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
