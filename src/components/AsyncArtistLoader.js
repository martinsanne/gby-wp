import { useState, useEffect } from "react"
import axios from "axios"
import { getApiURL } from "../utils/config"

export default function AsyncArtistLoader({ pageId, children }) {
  const [artists, setArtists] = useState(null)
  const [hero, setHero] = useState(null)

  useEffect(() => {
    const fetchData = () => {
      // axios.get(`${getApiURL()}/wp-json/wp/v2/pages/${pageId}`).then(res => {
      axios.get(`${getApiURL()}/wp-json/wp/v2/pages/2`).then(res => {
        if (res.data && res.data.acf) {
          if (res.data.acf.artists) {
            setArtists(res.data.acf.artists)
          }
          if (res.data.acf.hero) {
            setHero(res.data.acf.hero)
          }
        }
      })
    }

    fetchData()
  }, [pageId])

  return children({ asyncHero: hero, asyncArtists: artists })
}
