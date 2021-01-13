/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Invision
          </a>
          ,{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          . 
        </nav>
        <div className="copyright" id="copyright">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/mohamed-ech-charay-765421170/"
            target="_blank"
          >
            Ech-charay Mohamed
          </a>
          |{" "}
          <a
            href="https://www.linkedin.com/in/basma-maachi-b9533413b/"
            target="_blank"
          >
            Maachi Bassma
          </a>
          |{" "}
          <a
            href="https://www.linkedin.com/in/walideljaimi/"
            target="_blank"
          >
            El Jaimi Walid
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
