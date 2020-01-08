import React, { useState, useEffect } from "react";
import YAML from "yaml";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

function Announcement({
  name,
  text,
  image,
  linkPath,
  linkName,
  color,
  textColor
}) {
  const style = {
    backgroundColor: color,
    color: textColor
  };
  return (
    <div className="row announcement-card" style={style}>
      <h3 className="title announcement-card__title">{name}</h3>
      <div className="col-md-7 announcement-card__img">
        <img
          src={process.env.PUBLIC_URL + "/announcemets/imgs/" + image}
          alt={{ name }}
          className="d-block w-100 mb-5"
        />

        <p className="announcement-card__link">
          <a
            href={linkPath}
            style={{ color: textColor }}
            className="announcement-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkName}
          </a>
        </p>
      </div>
      <div className="col-md-5">
        <p
          className="announcement-card__text"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function Announcements() {
  const [announcements, setAnnouncements] = useState(null);
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/announcemets/announcements.yaml")
      .then(response => response.text())
      .then(respText => {
        const announcements = YAML.parse(respText);
        setAnnouncements(announcements);
      });
  }, []);
  let announcementElems = null;
  if (announcements) {
    announcementElems = announcements.map(announcement => {
      const [name, ops] = Object.entries(announcement)[0];
      return (
        <Carousel.Item>
          <div>
            <Announcement {...ops} key={name} />
          </div>
        </Carousel.Item>
      );
    });
  }
  return (
    <section id="announcements" className="entry mb-5">
      <div className="entry-header">
        <h2 className="entry-title">Анонси</h2>
        <div className="entry-content">
          <div className="card-holder">
            <Carousel>{announcementElems}</Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
