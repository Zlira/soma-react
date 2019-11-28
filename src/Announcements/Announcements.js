import React, {useState, useEffect} from 'react'
import YAML from 'yaml'

import useDimensions from '../hooks/useDimensions'
import useWindowSize from '../hooks/useWindowSize'

import './Announcements.css'


// TODO refactor this card pattern into separate container
// TODO add listeners for window resize or make card sizes less dynamic

const cardVerticalOffsets = [0, 36, 20, 12, 24]

function Announcement({
    index, name, text, image, linkPath, linkName,
    color, textColor, width, setContHeight, becomeActive,
    leftOffset
  }) {
  const [titleRef, titleDims] = useDimensions()
  const [cardRef, cardDims] = useDimensions()
  const topOffset = cardVerticalOffsets[index % cardVerticalOffsets.length]
  const style = {
    backgroundColor: color, 
    color: textColor,
    left: leftOffset + 'px',
    top: topOffset  + 'px',
    width: width,
  }
  if (titleDims) {
    style['minHeight'] = titleDims.height + 40 + 'px'
  }
  if (cardDims) {
    setContHeight(Math.round(cardDims.height) + topOffset + 40)
  }
  return <div className="row announcement-card" ref={cardRef} style={style} onClick={becomeActive}>
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
    const [contRef, contDimensions] = useDimensions()
    const [maxHeight, setMaxHeight] = useState(0)
    const [announcements, setAnnouncements] = useState(null)
    const [width, height] = useWindowSize()
    const [activeCard, setActiveCard] = useState(0)
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/announcemets/announcements.yaml')
          .then(response => response.text())
          .then(respText => {
            const announcements = YAML.parse(respText).reverse()
            setAnnouncements(announcements)
            setActiveCard(announcements.length - 1)
          })
    }, [])
    let announcementElems = null
    const setContainerHeight = (h) => {
      if (h > maxHeight) {
        setMaxHeight(h)
      }
    }
    const leftOffset = 46
    if (announcements) {
        const cardWidth = contDimensions.width - leftOffset * (announcements.length - 1) - 14
        const cardLeftOffset = (i) => (
          i <= activeCard? i * 46 : contDimensions.width - (announcements.length - i) * 46 
        )
        announcementElems = announcements.map(
          (announcement, index) => {
            const [name, ops] = Object.entries(announcement)[0]
            return <Announcement {...ops} index={index}  key={name} 
                    width={cardWidth} setContHeight={setContainerHeight}
                    leftOffset={cardLeftOffset(index)} becomeActive={() => setActiveCard(index)}/>
          }
        )
    }
    return 	<section id="announcements" className="entry mb-5">
    <div className="entry-header">
        <h2 className="entry-title">Анонси</h2>
        <div className='entry-content'>
          <div className="card-holder" ref={contRef} style={{height: maxHeight}}>
            { announcementElems }
          </div>
        </div>
    </div>
    </section>
}