import React from 'react'

import sSvg from './imgs/s.svg'
import oSvg from './imgs/o.svg'
import mSvg from './imgs/m.svg'
import aSvg from './imgs/a.svg'


function Letter({src}) {
  return <span className="soma-letter-container">
    <img src={src} className="soma-letter" />
  </span>
}

export function LetterS() {
  return <Letter src={sSvg} />
}

export function LetterO() {
  return <Letter src={oSvg} />
}

export function LetterM() {
  return <Letter src={mSvg} />
}

export function LetterA() {
  return <Letter src={aSvg} />
}