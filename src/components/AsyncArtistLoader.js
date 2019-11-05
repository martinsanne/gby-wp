import { useState, useEffect } from "react"

export default function AsyncArtistLoader({ pageId, children }) {
  const [artists, setArtists] = useState([])
  const [hero, setHero] = useState([])
  // const [hasError, setErrors] = useState(false)
  const [loaded, setLoaded] = useState(false)

  async function fetchData() {
    console.log(fetchData)
    const res = await fetch(`http://oya.test/wp-json/wp/v2/pages/${pageId}`)
    res
      .json()
      .then(res => {
        if (res.acf && res.acf.artists) {
          setArtists(res.acf.artists)
          setHero(res.acf.hero)
          setLoaded(true)
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return children({ asyncHero: hero, asyncArtists: artists, loaded })
}
