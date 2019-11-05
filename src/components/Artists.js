import React, { Component, createRef } from "react"
import cc from "classcat"

import ArtistsItem from "./ArtistsItem"
import { Doodle, Mouse } from "./utils"

const initMaxHeight = "300px"

export default class Artists extends Component {
  list = createRef()
  state = {
    showArtists: false,
    maxHeight: initMaxHeight,
    transition: 0,
    currentArtist: null,
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.addDots(this.list)
    }, 200)
    window.addEventListener("resize", this.addDots)
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.addDots(this.list)
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.addDots)
  }
  addDots = () => {
    const items = [...this.list.current.querySelectorAll("li")]
    items.map((item, i) => {
      // Remove existing dividers
      if (item.querySelector(".Artists__divider"))
        item.removeChild(item.querySelector(".Artists__divider"))

      const nextItem = items[i + 1]
      // Check if they're on the same line
      if (
        nextItem &&
        item.getBoundingClientRect().top ===
          nextItem.getBoundingClientRect().top
      ) {
        // add divider if they're on the same line
        const bullet = document.createElement("span")
        bullet.classList.add("Artists__divider")
        bullet.innerHTML = "&bull;"
        item.appendChild(bullet)
      }
      return null
    })
  }
  handleClick = () => {
    const height = this.list.current.getBoundingClientRect().height
    this.setState(prevState => ({
      showArtists: !prevState.showArtists && height > initMaxHeight,
      maxHeight: !prevState.showArtists ? height : initMaxHeight,
      transition: `${height / 3000}s ease`,
    }))
  }
  setCurrentArtist = currentArtist => {
    this.setState({
      currentArtist,
    })
  }

  render() {
    const { artists } = this.props
    const { showArtists, currentArtist } = this.state
    const style = {}
    return (
      <Doodle>
        <div
          className={cc({
            Artists: true,
            "Artists--show": showArtists,
          })}
        >
          <div className="Artists__wrapper" style={style}>
            <ul className="Artists__list" ref={this.list}>
              {artists &&
                artists
                  .filter(a => a.status === "publish")
                  .map(artist => (
                    <ArtistsItem
                      key={`ArtistsItem-${artist.wordpress_id}`}
                      artist={artist}
                      setCurrentArtist={this.setCurrentArtist}
                      hero={this.props.hero}
                    />
                  ))}
            </ul>
          </div>
          <Mouse>
            {({ x, y }) =>
              currentArtist &&
              currentArtist.featured_image &&
              x &&
              y && (
                <div
                  className="Artists__image"
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                  }}
                >
                  <img
                    src={currentArtist.featured_image.sizes.thumbnail}
                    alt={currentArtist.title.rendered}
                  />
                </div>
              )
            }
          </Mouse>
        </div>
      </Doodle>
    )
  }
}
