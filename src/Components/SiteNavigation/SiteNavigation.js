import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

import "./SiteNavigation.css";

function NavLink({ href, text, children, onSelect }) {
  return (
    <>
      <Link
        onClick={onSelect}
        className="nav-link"
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        offset={-60}
        duration={600}
        delay={5}
        isDynamic={true}
        tabIndex={0}
      >
        {text}
      </Link>
      {children}
    </>
  );
}

function SocialMediaLink(props) {
  const { link, platform } = props;
  return (
    <a
      href={link}
      className="social-media-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`fa fa-${platform}`}></i>
    </a>
  );
}

function SiteNavigation() {
  const navItems = [
    { href: "announcements", text: "анонси" },
    { href: "participation", text: "участь" },
    { href: "calendar", text: "публічні події" },
    { href: "staff", text: "колектив" },
    {
      href: "contacts",
      text: "контакти",
      children: (
        <>
          <SocialMediaLink
            link="https://www.facebook.com/soma.majsternia/"
            platform="facebook-f"
          />
          <SocialMediaLink
            link="https://www.instagram.com/soma.majsternia/"
            platform="instagram"
          />
        </>
      )
    }
  ];
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="sm"
      className="justify-content-end"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          {navItems.map(item => (
            <Nav.Item key={item.href}>
              <NavLink {...item} onSelect={() => setExpanded(false)} />
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SiteNavigation;
