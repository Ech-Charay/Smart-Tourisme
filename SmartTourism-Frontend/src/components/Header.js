/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function Header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header" >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/images/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          <h1 className="title"><strong>SMART Tourism</strong></h1>
            <h3>"Comme tout ce qui compte dans la vie, un voyage est une oeuvre d'art" Andrés Syarés</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
