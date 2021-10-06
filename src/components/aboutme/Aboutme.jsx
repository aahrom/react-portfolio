import React from "react";
import "./aboutme.scss";

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="wrapper">
        <p>
          <h1>Nice to meet you.</h1>
          <ul>
            <li>
              Born and raised in{" "}
              <a
                href="https://www.britannica.com/place/Malaysia"
                target="__blank"
              >
                Malaysia
              </a>
              .
            </li>
            <li>
              I'm an aspiring web developer and a recent Computer Science
              graduate from the{" "}
              <a href="https://www.unl.edu/" target="__blank">
                University of Nebraska-Lincoln
              </a>{" "}
              with a passion for people and technology.
            </li>
            <li>My interests include geography, history and culture.</li>
            <li>
              My values are deeply rooted in helping to better my community by
              utilizing my skills in technology and this includes: Raising
              awareness on the importance of Computer Science, encouraging and
              empowering other women to recognize their place in the world of
              STEM and providing high-quality solutions to real-world problems
              through the craft of software development.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
