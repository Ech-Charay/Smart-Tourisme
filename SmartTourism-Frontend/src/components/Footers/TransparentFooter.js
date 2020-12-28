/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button, UncontrolledTooltip, Nav, NavItem } from "reactstrap";
import Navbar from "reactstrap/lib/Navbar";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 col-sm-6 ml-5 mr-5">
            <ul>

              <li><Link className="nav-link" to='#'> Reservation Hotel</Link></li>
              <li><Link className="nav-link" to='#'> Espaces Vertes</Link></li>
              <li><Link className="nav-link" to='#'> Portfolio</Link></li>
              <li><Link className="nav-link" to='#'> Team </Link></li>
              <li><Link className="nav-link" to='#'> Contact </Link></li>

            </ul>
          </div>

          <div className="col-4 col-sm-4 ml-10">
            <a className="pr-3 ">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="pr-3">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a className="pr-3">
              <i className="fab fa-instagram"></i>
            </a>


          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
