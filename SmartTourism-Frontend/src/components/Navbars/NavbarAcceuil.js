import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function NavbarAcceuil() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" href="#brand">
              Smart Tourism
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Welcome to our Smart Tourism Service
            </UncontrolledTooltip>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/acceuil">
                  <i className="now-ui-icons arrows-1_minimal-down"></i>
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons arrows-1_minimal-down"></i>
                  <p>Services</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/guide" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                    Guide
                  </DropdownItem>
                  <DropdownItem to="/album" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                    Album de Souvenir
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                    Dashboard
                  </DropdownItem>
                  <DropdownItem to="/events_festivaux/list" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                    Evénements & Festivals
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <NavItem>
                <NavLink href="#contact">
                  <i className="now-ui-icons arrows-1_minimal-down"></i>
                  <p>Contact</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/logout"
                  id="logout-tooltip"
                >
                  <i className="now-ui-icons sport_user-run"></i>
                  <p className="d-lg-none d-xl-none">Se Déconnecter</p>
                </NavLink>
                <UncontrolledTooltip target="#logout-tooltip">
                  Se Déconnecter
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarAcceuil;
