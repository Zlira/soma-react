import React from "react";
import Card from "./Card";
import cardsInfo from "./cardsInfo";
import "./index.css";

function Description() {
  return (
    <div className="col-md-6 col-sm-12 mb-5">
      <p className="mb-5">
        Soma – некомерційний проєкт, всі кошти спрямовуються на розвиток,
        дослідження та підтримку діяльності майстерні. Основним форматом участі
        є членський папірець, який дає можливість підтримати майстерню,
        долучитися до її становлення та працювати/досліджувати в її межах. Усі
        папірці, окрім “3 ковтки соми”, дають можливість використовувати простір
        майстерні, та її бібліотеку у вільний від занять час.
      </p>
      <p className="mb-5">
        Ми хочемо бути максимально відкритими, довіряємо вам, тому ви самі
        можете обрати суму, яку готові внести.
      </p>
      <p>Також можлива участь в якості волонтера.</p>
    </div>
  );
}

function Participation(props) {
  const cards = cardsInfo.map((el, i) => <Card {...el} key={i} />);
  return (
    <section id="participation" className="entry mb-5 participation">
      <header className="entry-header">
        <h2 className="entry-title">Участь</h2>
      </header>
      <div className="entry-content">
        <div className="row mb-5">
          <Description />
          {cards}
        </div>
      </div>
    </section>
  );
}

export default Participation;
