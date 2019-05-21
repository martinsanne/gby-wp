import React, { Component } from "react"
import cc from "classcat"
import { Link } from "gatsby"
import { Html } from "./utils"
import { themeColors } from "../utils/config"

const slashFirst = url => {
  return url.indexOf("/") === 0 ? url : `/${url}`
}

export default class ArtistsItem extends Component {
  state = {
    colorIndex: 0,
  }

  setHoverColor = e => {
    e.currentTarget.style.color = themeColors[this.state.colorIndex]
    this.setState(prevState => ({
      colorIndex:
        this.state.colorIndex < themeColors.length - 1
          ? prevState.colorIndex + 1
          : 0,
    }))
  }

  removeHoverColor = e => {
    e.currentTarget.style.color = ""
  }

  handleMouseEnter = e => {
    this.setHoverColor(e)
    if (this.props.artist) {
      if (!this.props.setHeroArtist) {
        this.props.setCurrentArtist(this.props.artist)
      }
      if (this.props.setHeroArtist) {
        this.props.setHeroArtist(this.props.artist)
      }
    }
  }

  handleMouseLeave = e => {
    this.removeHoverColor(e)
    // if (!this.props.setHeroArtist) {
    //   this.props.setCurrentArtist(false)
    // } else {
    //   this.props.setHeroArtist(false)
    // }
  }

  render() {
    const { artist } = this.props
    return (
      <li
        className={cc({
          Artists__item: true,
          "Artists__item--headliner": artist.acf.headliner && !this.props.hero,
          "Artists__item--hero-headliner":
            artist.acf.headliner && this.props.hero,
        })}
      >
        <Link
          className="Artists__link"
          to={slashFirst(artist.acf.greencopper_url)}
          onMouseOver={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <span className="Artists__name">
            <Html content={artist.title.rendered} />
            {/* {artist.acf.country_code ? ` (${artist.acf.country_code})` : ''} */}
          </span>
          {artist.acf.country_code ? (
            <span className="Artists__country">
              &nbsp;({artist.acf.country_code})
            </span>
          ) : (
            ""
          )}
          {/* {daysFromNow(artist.date) && <Badge name="new" small />} */}
        </Link>
      </li>
    )
  }
}
