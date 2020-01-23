import React from "react";

import {
  LetterS,
  LetterO,
  LetterM,
  LetterA
} from "./SomaLetters.js";

import banerImg from './imgs/soma_banerok.svg'
import hairImg from './imgs/volossia.png'
import circleImg from './imgs/kruzhok.svg'
import stickImg from './imgs/palychka.svg'
import heartImg from './imgs/serce.svg'

import "./About.css";


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


function Button({text, link, className}) {
  className = className || ''
  return (
      <div className={'heart-button ' + className}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="heart-button-text">{text}</span>
          <img
            src={heartImg}
            alt={text}
          />
        </a>
      </div>
    )
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

export default function About() {
  return (
    <section id="home" className="entry mb-5">
      <div className="row no-gutters top-row">
        <div className="col-1 banner-col">
          <img src={banerImg}  className="banner-img" alt="soma" />
        </div>
        <div className="col-8 col-lg-4 left-col">
          <p className="what-is-it">що це?</p>
        </div>
        <div className="col-3 col-lg-1 center-col align-items-center justify-content-end">
          <LetterS />
          <LetterO />
        </div>
        <div className="d-none d-lg-flex col-6 right-col align-items-center justify-content-end">
          <LetterA/>
        </div>
      </div>
      <div className="row no-gutters middle-row justify-content-end">
        <div className="col-8 col-lg-4 left-col">
          <img src={hairImg} className="hair-img" alt="" />
          <Button text="прийти"
            className="heart-button-come"
            link="https://forms.gle/TBfYPvjDfvb1cb59A"/>
        </div>
        <div className="col-lg-1 col-3 center-col ">
          <img src={stickImg} className="stick-img" alt=""/>
          <img src={circleImg} className="circle-img" alt=""/>
        </div>
        <div className="col-6 d-none d-lg-flex right-col"></div>
      </div>
      <div className="row no-gutters bottom-row justify-content-end">
        <div className="col-lg-4 col-8 left-col">
          <Button text="donate"
            className="heart-button-donate"
            link="https://privatbank.ua/sendmoney?payment=a101e4603b"/>
        </div>
        <div className="col-lg-1 col-3 d-flex center-col align-items-center justify-content-end">
          <LetterM/>
        </div>
        <div className="col-6 d-none d-lg-flex right-col">
        </div>
      </div>
      <div className="row d-flex d-lg-none no-gutters md-bottom-row justify-content-end">
        <div className="col-lg-1 col-3 d-flex center-col align-items-center justify-content-end">
          <LetterA/>
        </div>
      </div>
      <Marquee />
    </section>
  );
}
