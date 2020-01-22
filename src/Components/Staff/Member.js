import React from "react";

function Member({ imgLink, imgAlt, name, description }) {
  return (
    <section className="mb-5 col-md-4 ">
      <img src={imgLink} className="d-block w-100 mb-4" alt={imgAlt} />
      <h4 className="title mb-3">{name}</h4>
      <p className="mb-3">{description}</p>
    </section>
  );
}
export default Member;
