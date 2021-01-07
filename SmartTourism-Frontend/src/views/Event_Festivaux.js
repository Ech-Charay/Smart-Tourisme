import React from "react";

// core components
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ServicesHeader from "components/Headers/ServicesHeader";
import ShowEvent from "components/body/evenementsETfestivaux/ShowEvent";
import AddEvent from "components/body/evenementsETfestivaux/AddEvent";
import NavbarAcceuil from "components/Navbars/NavbarAcceuil";

function Partie({action}){
  if(action == "show")
    return(
      <ShowEvent/>
    );
  else
  return(
    <AddEvent/>
  );
};

function Events_Festivaux(props) {
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
          <Partie action={props.action}/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Events_Festivaux;
