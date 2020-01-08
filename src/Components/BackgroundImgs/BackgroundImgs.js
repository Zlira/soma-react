import React from 'react'

import bush from './imgs/bush.png'
import cracks from './imgs/cracks.png'
import spring from './imgs/spring.png'
import sticks from './imgs/sticks.png'

import './BackgroundImgs.css'


function Image({index, path}) {
    return <div className={`image-${index} image`}>
        <img src={path} alt=""/>
    </div>
}


export default function BackgroundImages() {
    const images = [bush, cracks, spring, sticks]
    return (<div className="images">
      {images.map((path, index) => <Image index={index + 1} path={path} key={index}/>)}
    </div>)
}