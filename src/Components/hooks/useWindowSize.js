import {useLayoutEffect, useState} from 'react'


export default function useWindowSize() {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(
    () => {
      function updateSize() {
        console.log('updating size')
        setSize([window.innerWidth, window.innerWidth])
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, []
  )
  return size
}