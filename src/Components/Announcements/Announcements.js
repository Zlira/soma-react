import React, { useState, useEffect } from "react";
import YAML from "yaml";
import Carousel from "react-bootstrap/Carousel";
import "./Announcements.css";

function Announcement({ name, text, image, linkPath, linkName }) {
  return (
    <div className="announcement-card">
      <div className=" announcement-card__img">
        <img
          src={process.env.PUBLIC_URL + "/announcemets/imgs/" + image}
          alt={name}
          className="d-block w-100 mb-5"
        />
        <h3 className="title mb-5">{name}</h3>
      </div>
      <div>
        <p
          className="announcement-card__text"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {text}
        </p>
        <p className="announcement-card__link">
          <a
            href={linkPath}
            className="btn btn-outline-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkName}
          </a>
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
        <Carousel.Item key={name}>
          <div>
            <Announcement {...ops} />
          </div>
        </Carousel.Item>
      );
    });
  }
  return (
    <section id="announcements" className="entry mb-5">
      <div className="entry-header">
        <h2 className="entry-title">Анонси</h2>
      </div>
      <div className="entry-content">
        <div className="card-holder">
          <Carousel indicators={false}>{announcementElems}</Carousel>
        </div>
      </div>
    </section>
  );
}
