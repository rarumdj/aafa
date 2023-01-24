import React from "react";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9]">
      <div className="text-neutral container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center "
            href="/">
            <img src={logo} alt="" className="w-10" />
            <span className="ml-3 text-xl custom-font">A+ Agency</span>
          </a>
          <p className="mt-6 text-sm">
            The creatives from Africa are cut from a collection of rough
            diamonds but with thorough refining and polishing they are bound to
            take over the globe!
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-32 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
              About
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <Link className=" hover:text-accent-black" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className=" hover:text-accent-black" to="/about">
                  Our Service
                </Link>
              </li>
              <li>
                <Link className=" hover:text-accent-black" to="/contact">
                  Our Work
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
              Learn
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <Link className=" hover:text-accent-black" to="/">
                  Education
                </Link>
              </li>
              <li>
                <Link className=" hover:text-accent-black" to="/">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className=" hover:text-accent-black" to="/">
                  Press reviews
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
              Contact us
            </h2>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-accent-black0" href="/">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-accent-black0" href="/">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-accent-black0" href="/">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-accent-black0" href="/">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t border-gray-200 py-8 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-accent-black text-sm text-center sm:text-left">
          © Copyright 2021 A+ AGENCY. All rights reserved.
          {/* <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
