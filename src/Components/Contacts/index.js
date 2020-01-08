import React from "react";
import "./index.css";

function SocialMediaLink({ link, platformName }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {platformName}
    </a>
  );
}

function Mail({ link, mail }) {
  return <a href={link}>{mail}</a>;
}

function PhoneNum(props) {
  const { link, number } = props;
  return <a href={link}>{number}</a>;
}

function Map({ link }) {
  return (
    <iframe
      title="map"
      src={link}
      allowFullScreen=""
      frameBorder="0"
      width="600"
      height="450"
    ></iframe>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="entry mb-5 pb-5 contacts">
      <header className="entry-header">
        <h2 className="entry-title">Контакти</h2>
      </header>

      <div className="row">
        <div className="col">
          <p>
            <SocialMediaLink
              link="https://www.facebook.com/soma.majsternia"
              platformName="Facebook"
            />
            <SocialMediaLink
              link="https://www.instagram.com/soma.majsternia/"
              platformName="Instagram"
            />
            <Mail
              link="mailto:soma.lviv@gmail.com"
              mail="soma.lviv@gmail.com"
            />
            <PhoneNum link="tel:+380689595582" number="068 959 5582" />
          </p>
        </div>
        <div className="col">
          <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.9628249679438!2d24.036802421084904!3d49.83289850200775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add349ad6ddcf%3A0xb07a488bd1318bb6!2ssoma!5e1!3m2!1suk!2sua!4v1557503536755!5m2!1suk!2sua" />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
