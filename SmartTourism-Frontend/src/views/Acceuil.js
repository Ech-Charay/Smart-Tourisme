import React from "react";
import BodyAcceuil from "components/body/bodyAcceuil";
import DefaultFooter from "components/Footers/DefaultFooter";
import Header from "components/Headers/Header";
import NavbarAcceuil from "components/Navbars/NavbarAcceuil";

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
      <NavbarAcceuil/>
      <div className="wrapper">
        <Header />
        <div className="main">
          <BodyAcceuil/>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}

export default Acceuil;
