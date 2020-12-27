import React from "react";

// core components
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ServicesHeader from "components/Headers/ServicesHeader";
import NavbarAcceuil from "components/NavbarAcceuil";
import ShowEvent from "components/body/evenementsETfestivaux/ShowEvent";

function Events_Festivaux() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavbarAcceuil />
      <div className="wrapper">
        <ServicesHeader title="Evénements et Festivaux." />
        <div className="section section-contact-us text-center">
          <ShowEvent/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Events_Festivaux;
