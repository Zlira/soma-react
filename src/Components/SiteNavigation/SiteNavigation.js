import React, { Fragment } from "react";
import "./SiteNavigation.css";

function NavLink({ href, text, children }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {text}
      </a>
      {children}
    </li>
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
    { href: "#announcements", text: "анонси" },
    // { href: "#workshop", text: "майстерні" },
    { href: "#participation", text: "участь" },
    { href: "#calendar", text: "розклад" },
    // { href: "#masters", text: "майстри_ні" },
    {
      href: "#contacts",
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
  return (
    <ul className="site-navigation nav justify-content-end">
      {navItems.map(item => (
        <NavLink {...item} key={item.href} />
      ))}
    </ul>
  );
}

export default SiteNavigation;
