import React from "react";
import "./SiteNavigation.css";

function NavLink({ href, text }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {text}
      </a>
    </li>
  );
}

function SiteNavigation() {
  const navItems = [
    { href: "#announcements", text: "анонси" },
    { href: "#workshop", text: "майстерні" },
    { href: "#participation", text: "участь" },
    { href: "#schedule", text: "розклад" },
    { href: "#masters", text: "майстри_ні" },
    { href: "#contacts", text: "контакти" }
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
