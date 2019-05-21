import { pictureOverlayColors } from "./config"

export const getRandomColor = i => {
  const colors = Object.keys(pictureOverlayColors)
  let color
  if (typeof i === "number") {
    color = colors[i % colors.length]
  } else {
    color = colors[Math.floor(Math.random() * colors.length)]
  }
  return pictureOverlayColors[color]
}
