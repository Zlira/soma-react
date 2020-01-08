import React from "react";

import BackgroundImages from "../BackgroundImgs/BackgroundImgs";
import {
  LetterS,
  LetterO,
  LetterM,
  LetterA
} from "../soma_letters/SomaLetters.js";

import comeImg from "../button_imgs/come.png";
import donateImg from "../button_imgs/donate.png";
import "./About.css";

function SiteHeader() {
  return (
    <header className="site-header">
      <h1 className="screen-reader-text">SOMA - це середовище</h1>
      <div className="site-title">
        <LetterS />
        <LetterO />
        <LetterM />
        <LetterA />
      </div>
    </header>
  );
}

function SiteDescription() {
  return (
    <div className="site-description">
      <p>
        Soma. майстерня – це відкрите експериметальне та продуктивне мистецьке
        середовище, що існує в контексті міста. Бачимо своєю місією створити
        нову культуру тілесності, в центрі якої будуть права людини та вільне
        дослідження. Нам близькі питання тіла в урбаністичному середовищі та DIY
        культура. Основні напрямки діяльності майстерні – дослідження в
        сучасному танці, перформансі, дизайні, та експериментальний самвидав.
      </p>
      <p>
        Ми працюємо як вільний простір для праці і дослідження для учасників
        майстерні та проводимо різноманітні воркшопи, регулярні класи, джеми,
        концерти, вечірки, лекції та бесіди.
      </p>
    </div>
  );
}

function Buttons() {
  const styles = { position: "absolute", bottom: 50 + "px" };
  return (
    <div className="row" style={styles}>
      <div className="col">
        <a
          href="https://forms.gle/TBfYPvjDfvb1cb59A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={comeImg}
            alt="приходьте займатися"
            style={{ width: "100px" }}
          />
        </a>
      </div>

      <div className="col">
        <a href="#">
          <img
            src={donateImg}
            alt="донуйте грошей"
            style={{ width: "100px" }}
          />
        </a>
      </div>
    </div>
  );
}

function Marquee() {
  const events = [
    "класи",
    "джеми",
    "права людини",
    "концерти",
    "воркшопи",
    "перформанси",
    "вечірки",
    "резиденції"
  ];
  const colors = ["#f0f", "#0f0", "#f00", "#00f"];
  const eventELements = events.map((event, index) => (
    <React.Fragment key={index}>
      <span style={{ color: colors[index % 4] }}>{event}</span>
      <span style={{ color: colors[(index + 2) % 4] }}>◆</span>
    </React.Fragment>
  ));
  return (
    <div className="marquee">
      <div className="repeat">{eventELements}</div>
      <div className="repeat">{eventELements}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="home" className="entry mb-5">
      <BackgroundImages />
      <SiteHeader />
      <SiteDescription />
      <Buttons />
      <Marquee />
    </section>
  );
}
