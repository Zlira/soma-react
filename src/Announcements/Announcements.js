import React, {useState, useEffect} from 'react'
import YAML from 'yaml'

import './Announcements.css'


// TODO make sure a card is as tall as it has to be to accomodate the title


function Announcement({index, name, text, image, linkPath, linkName, color, textColor}) {
  const style = {
    backgroundColor: color, 
    color: textColor,
    left: 46 * index + 'px',
    top: Math.round(Math.random()* 8) * 6  + 'px',
  }
  return <div className="row announcement-card" style={style}>
    <h3 className="title announcement-card__title">{name}</h3>
    <div className="col-md-7 announcement-card__img">
      <img src={process.env.PUBLIC_URL + '/announcemets/imgs/' + image}
        alt="Радикальна автентичність" className="d-block w-100 mb-5" />
      <p className="announcement-card__link">
        <a href={linkPath} style={{color: textColor}} 
          className="announcement-card__link" target="_blank"
           rel="noopener noreferrer">
          {linkName}
        </a>
      </p>
    </div>
    <div className='col-md-5'>
      <p className="announcement-card__text" style={{whiteSpace: 'pre-wrap'}}>{text}</p>
    </div>
  </div>
}


export default function Announcements() {
    const [announcements, setAnnouncements] = useState(null)
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/announcemets/announcements.yaml')
          .then(response => response.text())
          .then(respText => setAnnouncements(YAML.parse(respText)))
    }, [])
    let announcementElems = null
    if (announcements) {
        announcementElems = announcements.reverse().map(
          (announcement, index) => {
            const [name, ops] = Object.entries(announcement)[0]
            return <Announcement index={index} {...ops} key={name} />
          }
        )
    }
    return 	<section id="announcements" className="entry mb-5">
    <div className="entry-header">
        <h2 className="entry-title">Анонси</h2>
        <div className='entry-content'>
            { announcementElems }
        </div>
    </div>
    </section>
}