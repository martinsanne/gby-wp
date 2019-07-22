import React, { Component } from "react"
import { Link } from "gatsby"

import Logo from "./Logo"

import { getData } from "./AreaMap/data/kmlConverter"

import AreaMap from "./AreaMap/AreaMap"
import Filter from "./AreaMap/Filter"
import Modal from "./AreaMap/Modal"

class AreaMapContainer extends Component {
  state = {
    currentSelected: null,
    currentPosition: null,
    error: false,
    markers: [],
    layers: [],
    currentmarkers: [],
    currentKey: "",
  }
  componentDidMount() {
    getData().then(data => {
      this.setState({
        markers: data.markers,
        layers: data.layers,
        currentMarkers: data.markers,
      })
    })
    this.loadCoords()
  }
  loadCoords = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
    navigator.geolocation.getCurrentPosition(
      this.updateUserPosition,
      this.throwError,
      options
    )
    this.setState({
      error: false,
    })
  }
  handleClick = current => {
    if (current.modal) {
      document.querySelector("body").classList.add("oh")
      this.setState({
        currentSelected: current,
      })
    }
  }
  updateUserPosition = data => {
    const currentCoords = {
      name: "Me",
      type: "me",
      icon: "#icon-1344-040550",
      coords: {
        lat: data.coords.latitude,
        lng: data.coords.longitude,
      },
    }
    this.setState({
      markers: [...this.state.markers, currentCoords],
      currentMarkers: [...this.state.markers, currentCoords],
      currentPosition: currentCoords,
    })
  }
  throwError = error => {
    console.log(error)
    this.setState({
      error: true,
    })
  }
  handleFilter = key => {
    if (key !== this.state.currentKey && key !== "Fjern alle filtre") {
      const newCurrentMarkers = [...this.state.markers].filter(
        m => m.layer === key || m.name === "Publikumsområde"
      )
      this.setState({
        currentMarkers: newCurrentMarkers,
        currentKey: key,
      })
    } else {
      this.setState({
        currentMarkers: this.state.markers,
        currentKey: "",
      })
    }
  }
  closeModal = () => {
    document.querySelector("body").classList.remove("oh")
    this.setState({
      currentSelected: null,
    })
  }
  render() {
    const { currentSelected, layers, currentMarkers, currentKey } = this.state
    return (
      <div className="Map">
        <Link className="Map__logo" to={"/"}>
          <Logo type="hor" />
        </Link>
        {currentMarkers && (
          <AreaMap
            isMarkerShown
            markers={currentMarkers}
            handleClick={this.handleClick}
          />
        )}
        <Filter
          layers={layers}
          handleFilter={this.handleFilter}
          currentKey={currentKey}
        />
        {currentSelected && (
          <Modal content={currentSelected.modal} closeModal={this.closeModal} />
        )}
      </div>
    )
  }
}

export default AreaMapContainer
