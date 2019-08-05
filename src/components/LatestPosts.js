import React, { useState, useEffect } from "react"
import NewsCard from "./NewsCard"

const LatestPosts = ({ wordpress_id }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.oyafestivalen.no/wp-json/wp/v2/posts?per_page=5")
      .then(res => res.json())
      .then(res => {
        setPosts(res)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  if (loading) return null

  return posts
    .filter(post => post.id !== wordpress_id)
    .slice(0, 4)
    .map(post => <NewsCard key={`NewsCard-${post.id}`} post={post} />)
}

export default LatestPosts
