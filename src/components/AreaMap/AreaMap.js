/*global google*/
// https://github.com/tomchentw/react-google-maps/issues/707

import React, { Component, createRef } from "react"
import { compose, withProps } from "recompose"
import cc from "classcat"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  // GroundOverlay,
  // OverlayView,
  Polygon,
} from "react-google-maps"

import mapStyling from "./data/mapStyling"
import { getIcon } from "./utils/helpers"

const {
  MarkerWithLabel,
} = require("react-google-maps/lib/components/addons/MarkerWithLabel")

class AreaMap extends Component {
  constructor(props) {
    super(props)
    this.map = createRef()
    this.state = {
      markers: this.props.markers,
    }
  }

  componentDidMount() {
    this.setCenterAndZoom(this.state.markers)
  }

  componentWillReceiveProps(nextProps) {
    const festivalMarkers = nextProps.markers.filter(m => m.type !== "me")
    const myCurrentPosition = nextProps.markers.filter(m => m.type === "me")[0]
    this.setState({
      markers: festivalMarkers,
      myCurrentPosition,
    })
    if (this.state.zoom > 15 && !myCurrentPosition) {
      this.panToBounds(nextProps.markers)
    } else {
      this.setCenterAndZoom(nextProps.markers)
    }
  }
  setCenterAndZoom = markers => {
    const bounds = new window.google.maps.LatLngBounds()
    markers
      .filter(m => m.renderAs === "marker")
      .forEach(bound =>
        bounds.extend(
          new window.google.maps.LatLng(bound.coords.lat, bound.coords.lng)
        )
      )
    this.map.current.fitBounds(bounds)
  }
  panToBounds = markers => {
    const bounds = new window.google.maps.LatLngBounds()
    markers.forEach(bound =>
      bounds.extend(
        new window.google.maps.LatLng(bound.coords.lat, bound.coords.lng)
      )
    )
    this.map.current.panToBounds(bounds, 200)
  }
  zoomChange = () => {
    const zoom = this.map.current.getZoom()
    this.setState({
      zoom,
    })
  }
  handleclickedItem = current => {
    this.props.handleClick(current)
  }
  getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
  })
  render() {
    const { myCurrentPosition } = this.state
    return (
      <GoogleMap
        ref={this.map}
        defaultZoom={20}
        defaultOptions={{
          styles: mapStyling,
          gestureHandling: "greedy",
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
        }}
        onZoomChanged={this.zoomChange}
      >
        {this.state.markers
          .filter(m => m.renderAs === "marker")
          .map(m => (
            <MarkerWithLabel
              key={`${m.name}${m.coords.lat}${m.coords.lng}`}
              position={{
                lat: m.coords.lat,
                lng: m.coords.lng,
              }}
              icon={{
                url: m.icon,
                scaledSize: new google.maps.Size(m.iconSize[0], m.iconSize[1]), // size
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(
                  m.iconSize[0] / 2,
                  m.iconSize[1] / 2
                ),
              }}
              labelClass="Marker"
              labelAnchor={new google.maps.Point(0, 0)}
              visible={this.state.zoom > 15}
              onClick={() => this.handleclickedItem(m)}
            >
              <div
                className={cc({
                  Marker__name: true,
                  "Marker__name--is-visible": this.state.zoom > 17,
                })}
                style={{
                  marginTop: `${m.iconSize[1] * 0.6}px`,
                }}
              >
                {m.name}
              </div>
            </MarkerWithLabel>
          ))}
        {/* {this.state.markers.filter(m => m.renderAs === 'marker').map(m => (
          <OverlayView
            key={`${m.renderAs}${m.name}${m.coords.lat}${m.coords.lng}`}
            position={{
              lat: m.coords.lat,
              lng: m.coords.lng
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={this.getPixelPositionOffset}
            visible={this.state.zoom > 15}
          >
            <div
              className={cc({
                Marker: true,
                'Marker--is-visible': this.state.zoom > 15,
                'Marker--show-text': this.state.zoom > 17,
                'Marker--is-clickable': m.modal
              })}
              style={{width: `${m.iconSize[0]}px`, height: `${m.iconSize[1]}px`,}}
              onClick={() => this.handleclickedItem(m)}
            >
              <p className="Marker__name">{m.name}</p>
              <img src={m.icon} alt="" />
            </div>
          </OverlayView>
        ))} */}
        {this.state.markers
          .filter(m => m.renderAs === "polygon")
          .map(m => (
            <Polygon
              key={`${m.name}${m.coords.lat}${m.coords.lng}`}
              path={m.coords}
              options={{
                fillColor: m.name !== "Publikumsområde" ? "#E25155" : "#4FA463",
                fillOpacity: m.name !== "Publikumsområde" ? 1 : 0.5,
                strokeWeight: 0,
                strokeColor: "white",
                zIndex: m.name !== "Publikumsområde" && 2,
              }}
              visible={
                m.name !== "Publikumsområde" ? this.state.zoom > 16 : true
              }
              onClick={() => this.handleclickedItem(m)}
            />
          ))}
        {myCurrentPosition && (
          <Marker
            key={`myCurrentPosition`}
            position={myCurrentPosition.coords}
            onClick={() => this.handleclickedItem(myCurrentPosition)}
            icon={{
              url: getIcon(myCurrentPosition),
              scaledSize: new google.maps.Size(30, 30), // size
            }}
            animation={google.maps.Animation.DROP}
            visible={true}
          />
        )}
        {/* {this.state.zoom > 15 && (
          <GroundOverlay
            defaultUrl={map}
            defaultBounds={
              new google.maps.LatLngBounds(
                new google.maps.LatLng(59.915976, 10.773229),
                new google.maps.LatLng(59.919892, 10.779066)
              )
            }
            defaultOpacity={1}
          />
        )} */}
        <Marker
          position={{ lat: 59.918188, lng: 10.776016 }}
          icon={{
            url: "../assets/images/logo.png",
            scaledSize: new google.maps.Size(100, 100), // size
            // origin: new google.maps.Point(50, 50) // size
          }}
          visible={this.state.zoom < 16}
          onClick={() =>
            this.setCenterAndZoom(
              [...this.state.markers].filter(m => m.type !== "me")
            )
          }
        />
      </GoogleMap>
    )
  }
}

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyACWRCGymDx6joIwT_qOmdh7i9W5ieNy7s&v=3.exp&libraries=geometry,drawing,places&force=lite",
    loadingElement: <div style={{ height: `100%` }}>Laster kart</div>,
    containerElement: (
      <div
        style={{
          height: `100vh`,
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(AreaMap)

export default MyMapComponent
