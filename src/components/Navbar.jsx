import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "hidden",
      },
    },
  };

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 80 ? setStickyClass("bg-[#f9f5f2]") : setStickyClass("");
    }
  };

  return (
    <header
      className={`py-4 px-6 lg:py-4 lg:px-16 fixed top-0 left-0 right-0 z-50 flex justify-center ${stickyClass}`}>
      <nav className="flex flex-row lg:justify-start justify-between items-center w-screen max-w-[110rem] ml-auto ">
        <div className="z-50">
          <Link to="/">
            <img src={logo} alt="" className="w-16" />
          </Link>
        </div>
        <div className="px-8 lg:flex hidden">
          <div className="border-r-2 border-gray-200 h-10" />
        </div>
        <div>
          <button
            className="-translate-y-4 -translate-x-8 lg:hidden block absolute z-50"
            onClick={handleClick}>
            <Icon
              icon={click ? "ep:close" : "charm:menu-hamburger"}
              fontSize={30}
              className="text-[#a44b2b]"
            />
          </button>
          <aside>
            <nav className="lg:flex hidden lg:space-x-36 space-x-8">
              <ul className="menu   flex flex-row items-center justify-center text-black  lg:text-sm text-xs">
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/"
                    onClick={() => setClick(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/about"
                    onClick={() => setClick(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/service"
                    onClick={() => setClick(false)}>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/education"
                    onClick={() => setClick(false)}>
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/dive"
                    onClick={() => setClick(false)}>
                    DIVE
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/reroll"
                    onClick={() => setClick(false)}>
                    REROLL
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/special-projects"
                    onClick={() => setClick(false)}>
                    Special projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/team"
                    onClick={() => setClick(false)}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                    to="/press-reviews"
                    onClick={() => setClick(false)}>
                    Press & Reviews
                  </Link>
                </li>
              </ul>
            </nav>

            <motion.nav
              initial={false}
              animate={click ? "open" : "closed"}
              variants={variants}
              className={`lg:hidden block bg-[#c57354] absolute top-0 left-0 right-0 bottom-0 min-h-screen`}>
              <div className="flex flex-col justify-center h-full items-center min-w-full px-8">
                <div className="space-y-16 w-full max-w-md">
                  <ul className="flex flex-col space-y-10 items-center text-white font-medium ">
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/"
                        onClick={() => setClick(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/about"
                        onClick={() => setClick(false)}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/service"
                        onClick={() => setClick(false)}>
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/education"
                        onClick={() => setClick(false)}>
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/dive"
                        onClick={() => setClick(false)}>
                        DIVE
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/reroll"
                        onClick={() => setClick(false)}>
                        REROLL
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/special-projects"
                        onClick={() => setClick(false)}>
                        Special projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/team"
                        onClick={() => setClick(false)}>
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="cursor-pointer focus-within:bg-[#a44b2b] focus:bg-[#a44b2b] active:bg-[#a44b2b]"
                        to="/press-reviews"
                        onClick={() => setClick(false)}>
                        Press & Reviews
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
