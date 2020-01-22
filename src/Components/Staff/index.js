import React from "react";
import Member from "./Member";
import memberInfo from "./memberInfo";
import "./index.css";

function Staff(props) {
  const members = memberInfo.map((el, i) => <Member {...el} key={i} />);
  return (
    <section id="staff" className="entry mb-5 participation">
      <header className="entry-header">
        <h2 className="entry-title">Колектив</h2>
      </header>
      <div className="entry-content">
        <div className="row justify-content-center">{members.slice(0, 2)}</div>
        <div className="mb-5 row justify-content-center">
          {members.slice(2)}
        </div>
      </div>
    </section>
  );
}

export default Staff;
