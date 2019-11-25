import React, {useState, useEffect} from 'react'
import YAML from 'yaml'


function Announcement({name, text, image, linkPath, linkName}) {
  return <div>
      <h3>{name}</h3>
      <p style={{whiteSpace: 'pre-wrap'}}>{text}</p>
      <img src={process.env.PUBLIC_URL + '/announcemets/imgs/' + image} />
    </div>
}


export default function Announcements() {
    const [announcements, setAnnouncements] = useState(null)
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/announcemets/announcements.yaml')
          .then(response => response.text())
          .then(respText => setAnnouncements(YAML.parse(respText)))
    }, [])
    console.log(announcements)
    let announcementElems = null
    if (announcements) {
        announcementElems = announcements.map(
          announcement => {
            const [name, ops] = Object.entries(announcement)[0]
            return <Announcement {...ops} key={name}/>
          }
        )
    }
    return 	<section id="announcements" class="entry mb-5">
    <header class="entry-header">
        <h2 class="entry-title">Анонси</h2>
        {announcementElems}
    </header>
    </section>
}