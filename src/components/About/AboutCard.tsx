import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aayush Rana </span>
            from <span className="purple"> Palampur, Himachal Pradesh.</span>
            <br />
            I am currently employed as a software developer at Netsmartz.
            <br />
            I have completed my B.tech in Computer science and engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning is earning"{" "}
          </p>
          <footer className="blockquote-footer">Aayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
