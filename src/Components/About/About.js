import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

import { LetterS, LetterO, LetterM, LetterA } from "./SomaLetters.js";

import banerImg from "./imgs/soma_banerok.svg";
import hairImg from "./imgs/volossia.png";
import circleImg from "./imgs/kruzhok.svg";
import stickImg from "./imgs/palychka.svg";
import heartImg from "./imgs/serce.svg";

import "./About.css";

function SiteDescription() {
  return (
    <div className="site-description">
      <div className="col-1 baner-col"></div>
      <div className="row">
        <p className="col-md-4 text-uppercase mb-5 ">
          танцююча спільнота самосвідомих та активних громадян_ок
        </p>
        <p className="col-md-4 text-uppercase mb-5">
          альтернативне дозвілля, в основі якого експеримет та практики рівності
        </p>
      </div>
      <div className="row">
        <p className="col-md-4 text-uppercase mb-5">
          зв'язок з тілом, як база для мистецького дослідження та здорового
          життя
        </p>
        <p className="col-md-4 text-uppercase mb-5">
          інтсрументи та знання для тілесного і творчого розвитку
        </p>

        <p className="col-md-8">
          Soma. майстерня – це відкрите експериметальне та продуктивне мистецьке
          середовище, що існує в контексті міста. Бачимо своєю місією створити
          нову культуру тілесності, в центрі якої будуть права людини та вільне
          дослідження. Нам близькі питання тіла в урбаністичному середовищі та
          DIY культура. Основні напрямки діяльності майстерні – дослідження в
          сучасному танці, перформансі, дизайні, та експериментальний самвидав.
        </p>
      </div>
    </div>
  );
}

function Button({ text, link, className }) {
  className = className || "";
  return (
    <div className={"heart-button " + className}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <span className="heart-button-text">{text}</span>
        <img src={heartImg} alt={text} />
      </a>
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
  const eventELements = events.map((event, index) => (
    <React.Fragment key={index}>
      <span>{event}</span>
      <span> ◆ </span>
    </React.Fragment>
  ));
  return (
    <div className="marquee">
      <div className="repeat">{eventELements}</div>
      <div className="repeat">{eventELements}</div>
    </div>
  );
}

function col(classes, children) {
  const className = classes.reduce((acc, val) => acc + " " + val, "");
  return <div className={className}>{children}</div>;
}

function LeftCol({ children }) {
  const classes = ["left-col", "col-8", "col-lg-4"];
  return col(classes, children);
}

function CenterCol({ children }) {
  const classes = [
    "center-col",
    "col-3",
    "col-lg-1",
    "d-flex",
    "flex-column",
    "align-items-center",
    "justify-content-end"
  ];
  return col(classes, children);
}

function RightCol({ children }) {
  const classes = [
    "right-col",
    "d-none",
    "d-lg-flex",
    "flex-column",
    "col-6",
    "align-items-center",
    "justify-content-end"
  ];
  return col(classes, children);
}

export default function About() {
  let [descriptionVisible, setDescriptionVisible] = useState(false);
  return (
    <section id="home" className="entry mb-5">
      <div className="row no-gutters what-is-it-row">
        <div className="col-1 banner-col">
          <img src={banerImg} className="banner-img" alt="soma" />
        </div>
        <LeftCol>
          <p
            className="what-is-it"
            onClick={() => setDescriptionVisible(!descriptionVisible)}
          >
            що це?
          </p>
        </LeftCol>
        <CenterCol>
          <LetterS />
          <LetterO />
        </CenterCol>
        <RightCol>
          <LetterA />
        </RightCol>
      </div>
      <Collapse in={descriptionVisible}>
        <div className="row justify-content-end">
          <div className="site-description-container col-12 col-md-11">
            <SiteDescription />
          </div>
        </div>
      </Collapse>
      <Collapse in={!descriptionVisible}>
        <div>
          <div className="row no-gutters hair-row justify-content-end">
            <LeftCol>
              <img src={hairImg} className="hair-img" alt="" />
            </LeftCol>
            <CenterCol>
              <img src={stickImg} className="stick-img" alt="" />
              <img src={circleImg} className="circle-img" alt="" />
            </CenterCol>
            <RightCol></RightCol>
          </div>
        </div>
      </Collapse>
      <div className="row no-gutters come-row justify-content-end">
        <LeftCol>
          <Button
            text="прийти"
            className="heart-button-come"
            link="https://forms.gle/TBfYPvjDfvb1cb59A"
          />
        </LeftCol>
        <CenterCol></CenterCol>
        <RightCol></RightCol>
      </div>
      <div className="row no-gutters donate-row justify-content-end">
        <LeftCol>
          <Button
            text="donate"
            className="heart-button-donate"
            link="https://privatbank.ua/sendmoney?payment=a101e4603b"
          />
        </LeftCol>
        <CenterCol>
          <LetterM />
        </CenterCol>
        <RightCol></RightCol>
      </div>
      <div className="row d-flex d-lg-none no-gutters md-bottom-row justify-content-end">
        <CenterCol>
          <LetterA />
        </CenterCol>
      </div>
      <Marquee />
    </section>
  );
}
