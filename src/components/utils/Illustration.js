import React from "react"

const illustrations = {
  bie: "/assets/images/illustrations/bie.png",
  blomst1: "/assets/images/illustrations/blomst_1.png",
  blomst2: "/assets/images/illustrations/blomst_2.png",
  blomst3: "/assets/images/illustrations/blomst_3.png",
  blomst4: "/assets/images/illustrations/blomst_4.png",
  edderkopp: "/assets/images/illustrations/edderkopp.png",
  eple: "/assets/images/illustrations/eple.png",
  gulrot: "/assets/images/illustrations/gulrot.png",
  mark: "/assets/images/illustrations/mark_orm.png",
  planet2: "/assets/images/illustrations/planet_2.png",
  rakett2: "/assets/images/illustrations/rakett_2.png",
  snegle: "/assets/images/illustrations/snegle.png",
}

const {
  blomst1,
  blomst2,
  blomst3,
  blomst4,
  eple,
  mark,
  planet2,
  rakett3,
} = illustrations

const randomIllustrations = {
  blomst1,
  blomst2,
  blomst3,
  blomst4,
  eple,
  mark,
  planet2,
  rakett3,
}

const getRandom = () => {
  const arr = Object.keys(randomIllustrations)
  return randomIllustrations[arr[Math.floor(Math.random() * arr.length)]]
}

const Illustration = ({ name, ...props }) => {
  if (!illustrations[name] && name !== "random") return null

  return (
    <img
      src={name === "random" ? getRandom() : illustrations[name]}
      alt={name}
      {...props}
    />
  )
}

export default Illustration
