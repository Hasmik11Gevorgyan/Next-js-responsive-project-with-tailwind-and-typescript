"use client";
import React from "react";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import { useState } from "react";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => {
    setShowNav(true);
  };

  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Nav openNav={openNavHandler} closeNav={closeNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
