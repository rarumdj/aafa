import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Navbar, Footer } from "./components";
import { About, Home, OurService } from "./pages";

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
            <Route path="/service" element={<OurService />}></Route>
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
