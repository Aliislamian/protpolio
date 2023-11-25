import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          "Hello, my name is Ali, and I'm a student at Islamia University right now. I'm in my sixth semester. I have a strong commond on web programming, and I am  expertise in the MERN stack—MongoDB, Express, React, and Node.js.

As a committed developer of the MERN stack, I have developed considerable expertise in creating cutting-edge,
 scalable online applications.
 I can effectively create and maintain databases, ensuring flawless data storage
  and retrieval, thanks to my strong MongoDB foundation.


I have experience utilising Node.js and Express.js to create server-side 
applications. As a result, I am able to develop reliable and effective APIs
 that manage the business logic and offer frictionless interaction between 
 the application's client-side and server-side components.

I'm particularly skilled with React.js, a potent JavaScript toolkit for creating user interfaces, on the front end.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ali Akbar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
