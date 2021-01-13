import React from "react";

// core components
import AlbumHeader from "components/Headers/AlbumHeader";
import AlbumBody from "components/body/Album/AlbumBody";

function Albums(props) {
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
      <div className="wrapper">
        <AlbumHeader title="Get your Album" />
        <div className="section section-contact-us text-center">
          <AlbumBody />
        </div>
      </div>
    </>
  );
}

export default Albums;
