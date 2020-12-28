import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import NavbarAcceuil from "components/NavbarAcceuil.js";
import Header from "components/Header.js";

// sections for this page
import BodyAcceuil from "components/body/bodyAcceuil";
import DarkFooter from "components/Footers/DarkFooter";

function Acceuil() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <NavbarAcceuil />
      <div className="wrapper">
        <Header />
        <div className="main">
          <BodyAcceuil/>
        </div>
      </div>
      <DarkFooter />
    </>
  );
}

export default Acceuil;
