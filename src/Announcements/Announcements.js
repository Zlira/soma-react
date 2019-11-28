import React, {useState, useEffect} from 'react'
import YAML from 'yaml'

import useDimensions from '../hooks/useDimensions'

import './Announcements.css'


// TODO refactor this card pattern into separate container


function Announcement({index, name, text, image, linkPath, linkName, color, textColor, setContHeight}) {
  const [titleRef, titleDims] = useDimensions()
  const [cardRef, cardDims] = useDimensions()
  const topOffset = Math.round(Math.random()* 8) * 6
  const style = {
    backgroundColor: color, 
    color: textColor,
    left: 46 * index + 'px',
    top: topOffset  + 'px',
  }
  if (titleDims) {
    style['minHeight'] = titleDims.height + 40 + 'px'
  }
  if (cardDims) {
    setContHeight(Math.round(cardDims.height) + topOffset)
  }
  return <div className="row announcement-card" ref={cardRef} style={style}>
    <h3 className="title announcement-card__title" ref={titleRef}>{name}</h3>
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
    const [maxHeight, setMaxHeight] = useState(0)
    const [announcements, setAnnouncements] = useState(null)
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/announcemets/announcements.yaml')
          .then(response => response.text())
          .then(respText => setAnnouncements(YAML.parse(respText)))
    }, [])
    let announcementElems = null
    const setContainerHeight = (h) => {
      if (h > maxHeight) {
        setMaxHeight(h)
      }
    }
    if (announcements) {
        announcementElems = announcements.reverse().map(
          (announcement, index) => {
            const [name, ops] = Object.entries(announcement)[0]
            return <Announcement index={index} {...ops} key={name} setContHeight={setContainerHeight}/>
          }
        )
    }
    console.log(maxHeight)
    return 	<section id="announcements" className="entry mb-5">
    <div className="entry-header">
        <h2 className="entry-title">Анонси</h2>
        <div className='entry-content'>
          <div className="card-holder" style={{height: maxHeight}}>
            { announcementElems }
          </div>
        </div>
    </div>
    </section>
}