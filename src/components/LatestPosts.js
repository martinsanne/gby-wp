import React, { useState, useEffect } from "react"
import Grid from "styled-components-grid"
import NewsCard from "./NewsCard"

const LatestPosts = ({ wordpress_id }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getLatestPosts = () => {
    fetch("https://api.oyafestivalen.no/wp-json/wp/v2/posts?per_page=5")
      .then(res => res.json())
      .then(res => {
        const _posts = res.filter(post => post.id !== wordpress_id).slice(0, 4)
        setPosts(_posts)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
  }

  useEffect(getLatestPosts, [])

  if (loading) return null
  if (error) return null

  return (
    <Grid className="Grid NewsCards--latest">
      {posts.map(post => (
        <Grid.Unit
          className="Grid__item"
          size={{ sm: 1 / 2, lg: 1 / 3, xxl: 1 / 4 }}
          key={`NewsCard-${post.id}`}
        >
          <NewsCard post={post} />
        </Grid.Unit>
      ))}
    </Grid>
  )
}

export default LatestPosts
