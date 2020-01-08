import React from "react";

import SiteNavigation from "./Components/SiteNavigation/SiteNavigation";
import About from "./Components/About/About";
import Announcements from "./Components/Announcements/Announcements";
import Participation from "./Components/Participation";
import Contacts from "./Components/Contacts";
import CalendarWrapped from "./Components/Calendar/CalendarWrapped";

function App() {
  return (
    <div className="site container">
      <SiteNavigation />
      <About />
      <Announcements />
      <Participation />
      <CalendarWrapped />
      <Contacts />
    </div>
  );
}

export default App;
