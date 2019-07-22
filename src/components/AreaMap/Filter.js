import React, { Component } from "react"
import cc from "classcat"

class Filter extends Component {
  state = {
    isOpen: false,
  }
  handleToggle = key => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  handleToggleAndFilter = key => {
    this.props.handleFilter(key)
    this.handleToggle(key)
  }
  render() {
    const { layers, handleFilter, currentKey } = this.props
    const { isOpen } = this.state
    return (
      <div className="MapFilter">
        <div className="MapFilter__desktop">
          {layers.map(key => (
            <button
              className={cc({
                MapFilter__item: true,
                "MapFilter__item--is-selected": key === currentKey,
              })}
              onClick={() => handleFilter(key)}
              key={`filter-${key}`}
            >
              {key}{" "}
              {key === currentKey && (
                <span className="MapFilter__close">(x)</span>
              )}
            </button>
          ))}
        </div>
        <div
          className={cc({
            MapFilter__mobile: true,
            "MapFilter__mobile--is-open": isOpen,
          })}
        >
          <button className="MapFilter__toggle" onClick={this.handleToggle}>
            {isOpen ? "Lukk" : currentKey || "Filter"}
          </button>
          {layers.map(key => (
            <button
              className={cc({
                MapFilter__item: true,
                "MapFilter__item--is-selected": key === currentKey,
              })}
              onClick={() => this.handleToggleAndFilter(key)}
              key={`filter-${key}`}
            >
              {key}{" "}
              {key === currentKey && (
                <span className="MapFilter__close">(x)</span>
              )}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default Filter
