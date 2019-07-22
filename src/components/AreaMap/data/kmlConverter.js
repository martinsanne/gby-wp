import { uniq } from "lodash"
import kml from "./kml"
import { getIcon, getIconSize } from "../utils/helpers"

var parseString = require("xml2js").parseString
let markers
export async function getData() {
  const modalContent = await fetch(
    "https://api.oyafestivalen.no/wp-json/wp/v2/location/?per_page=100"
  )
    .then(res => res.json())
    .then(res => res)
  await parseString(kml, function(err, result) {
    markers = result.kml.Document[0].Folder.reduce((res, curr) => {
      const name = curr.name[0]
      const placemark = curr.Placemark.reduce((r, c) => {
        if (c.Point) {
          const modal = modalContent.filter(
            m => m.title.rendered === c.name[0]
          )[0]
          r.push({
            name: c.name[0],
            icon: getIcon(parseInt(c.styleUrl[0].split("-")[1], 10)),
            iconSize: getIconSize(parseInt(c.styleUrl[0].split("-")[1], 10)),
            layer: name,
            renderAs: "marker",
            coords: {
              lat: parseFloat(c.Point[0].coordinates[0].split(",")[1].trim()),
              lng: parseFloat(c.Point[0].coordinates[0].split(",")[0].trim()),
            },
            modal: modal || null,
          })
        }
        // if (c.Polygon && c.name[0] !== 'Publikumsområde') {
        if (c.Polygon) {
          const modal = modalContent.filter(
            m => m.title.rendered === c.name[0]
          )[0]
          const res = {
            name: c.name[0],
            icon: getIcon(parseInt(c.styleUrl[0].split("-")[1], 10), c.name[0]),
            iconSize: getIconSize(parseInt(c.styleUrl[0].split("-")[1], 10)),
            layer: name,
            renderAs: "polygon",
            coords: c.Polygon[0].outerBoundaryIs[0].LinearRing[0].coordinates[0]
              .split(",0")
              .reduce((coords, current) => {
                if (current.trim().length > 1) {
                  coords.push({
                    lat: parseFloat(current.trim().split(",")[1]),
                    lng: parseFloat(current.trim().split(",")[0]),
                  })
                }
                return coords
              }, []),
            modal: modal || null,
          }
          r.push(res)
        }
        return r
      }, [])
      res.push(placemark)
      return res
    }, []).reduce((prev, curr) => prev.concat(curr))
  })
  const layers = await uniq(markers.map(d => d.layer))
  return {
    markers,
    layers,
  }
}

export default getData()
