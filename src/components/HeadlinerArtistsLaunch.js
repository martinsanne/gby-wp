import React from "react"

export default function HeadlinerArtistsLaunch({ artists }) {
  return (
    <div className="HeadlinerArtistsLaunch">
      {artists.map(artist => {
        return <div>Hello</div>
      })}
    </div>
  )
}
