import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'

/**
 * Usage
 *
 * const windowSize = useWindowSize({ debounce: 250 })
 * handleResize = () => {
 *    // do stuff on resize
 * }
 * useEffect(handleResize, [windowSize])
 *
 */

const getSize = () => {
  return typeof window !== 'undefined'
    ? {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
      }
    : null
}

const useWindowSize = settings => {
  const [windowSize, setWindowSize] = useState(getSize())

  const resizeEvent = debounce(
    handleResize,
    settings.debounce ? settings.debounce : 0
  )

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [resizeEvent])

  return windowSize
}

export default useWindowSize
