import React from 'react';

import SiteNavigation from './SiteNavigation'
import About from './About'
import Announcements from './Announcements/Announcements'

function App() {
  return (<div className="site container">
    <SiteNavigation/>
    <About/>
    <Announcements/>
  </div>)
}

export default App;
