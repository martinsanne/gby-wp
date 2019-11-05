import { useState, useEffect } from "react"
import { getApiURL } from "../utils/config"

export default function AsyncArtistLoader({ pageId, children }) {
  const [artists, setArtists] = useState([])
  const [hero, setHero] = useState([])
  // const [hasError, setErrors] = useState(false)
  const [loaded, setLoaded] = useState(false)

  async function fetchData() {
    const res = await fetch(`${getApiURL()}/wp-json/wp/v2/pages/${pageId}`)
    res
      .json()
      .then(res => {
        if (res.acf && res.acf.artists) {
          setArtists(res.acf.artists)
        }
        if (res.acf && res.acf.hero) {
          setHero(res.acf.hero)
        }
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return children({ asyncHero: hero, asyncArtists: artists, loaded })
}
