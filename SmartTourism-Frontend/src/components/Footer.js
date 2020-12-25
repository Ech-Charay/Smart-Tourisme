/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button, UncontrolledTooltip, Nav, NavLink, NavItem } from "reactstrap";
import Navbar from "reactstrap/lib/Navbar";

function Footer() {
  return (
    <footer   data-background-color="black" >
      <div className="container">
        <Navbar className="mt-5 mb-5">
            <Nav>
              <NavItem>
                <NavLink className="nav-link" to='#'> Reservation Hotel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='#'> Espaces Vertes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='#'> Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='#'> Team </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='#'> Conatct </NavLink>
              </NavItem>
            </Nav>

          <Nav  className="ml-aut mt-5 mb-5" >
            <NavItem>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                id="tooltip86114138"
              >
                <i className="fab fa-twitter"></i>
              </Button>

              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
               className="btn-neutral btn-icon btn-round"
               color="instagram"
               target="_blank">
                <i className="fab fa-instagram"
                ></i>
              </Button>

           
            </NavItem>
          </Nav>
        </Navbar>

      </div>








    </footer>
  );
}

export default Footer;
