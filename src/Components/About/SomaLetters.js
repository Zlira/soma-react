import React from 'react'

import sSvg from './imgs/s.svg'
import oSvg from './imgs/o.svg'
import mSvg from './imgs/m.svg'
import aSvg from './imgs/a.svg'


function Letter({src, alt}) {
  return <span className="soma-letter-container">
    <img src={src} alt={alt} className="soma-letter" />
  </span>
}

export function LetterS() {
  return <Letter src={sSvg} alt='s' />
}

export function LetterO() {
  return <Letter src={oSvg} alt='o'/>
}

export function LetterM() {
  return <Letter src={mSvg} alt='m'/>
}

export function LetterA() {
  return <Letter src={aSvg} alt='a'/>
}