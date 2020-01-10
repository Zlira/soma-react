import React from "react";

function Card({
  imgLink,
  imgAlt,
  title,
  description,
  validPeriod,
  price,
  registrationLink
}) {
  return (
    <section className="particip-card col-md-6 mb-5">
      <img src={imgLink} className="d-block w-100 mb-4" alt={imgAlt} />
      <h4 className="title mb-3">{title}</h4>
      <p className="mb-3">{description}</p>
      <p className="mb-3">{validPeriod}</p>
      <p className="mb-3">{price}</p>
      <a
        href={registrationLink}
        className="btn btn-outline-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        реєстрація
      </a>
    </section>
  );
}
export default Card;
