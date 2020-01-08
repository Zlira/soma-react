import React from "react";
import ErrorBoundry from "./ErrorBoundry";
import Calendar from "./Calendar";

function CalendarWrapped() {
  return (
    <section id="calendar" className="entry mb-5">
      <header className="entry-header">
        <h2 className="entry-title">Календар</h2>
      </header>
      <ErrorBoundry>
        <Calendar />
      </ErrorBoundry>
    </section>
  );
}

export default CalendarWrapped;
