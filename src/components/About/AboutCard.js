import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kummandas Meena </span>
            from <span className="purple"> Baran Rajsthan, India.</span>
            <br /> I am a final year student pursuing  Btech 
            in CSE Branch at IIIT KOTA.
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Book reading
            </li>
            <li className="about-activity">
              <ImPointRight />  web development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kummandas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
