import React from "react";

import SiteNavigation from "./SiteNavigation";
import About from "./About";
import Announcements from "./Announcements/Announcements";
import Participation from "./Participation";

function App() {
  return (
    <div className="site container">
      <SiteNavigation />
      <About />
      <Announcements />
      <Participation />
    </div>
  );
}

export default App;
