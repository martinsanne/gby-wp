const getPath = () => {
  const colors = ["red", "blue", "green", "pink", "yellow"]
  return `/assets/images/doodles-${
    colors[Math.floor(Math.random() * colors.length)]
  }/`
}
// const doodles = {
//   blubb: [
//     path + 'blubb_1.png',
//     path + 'blubb_2.png',
//     path + 'blubb_3.png',
//     path + 'blubb_4.png',
//     path + 'blubb_5.png',
//     path + 'blubb_6.png',
//     path + 'blubb_7.png',
//     path + 'blubb_8.png'
//   ],
//   bolgestrek: [
//     path + 'bolgestrek_1.png',
//     path + 'bolgestrek_2.png',
//     path + 'bolgestrek_3.png'
//   ],
//   bump: [
//     path + 'bump_1.png',
//     path + 'bump_2.png',
//     path + 'bump_3.png',
//     path + 'bump_4.png'
//   ],
//   highlights: [
//     path + 'highlights_1.png',
//     path + 'highlights_2.png',
//     path + 'highlights_3.png'
//   ],
//   kluss: [path + 'kluss_1.png', path + 'kluss_2.png', path + 'kluss_3.png'],
//   prikkprikkprikk: [path + 'prikkprikkprikk_1.png'],
//   radar: [
//     path + 'radar_1.png',
//     path + 'radar_2.png',
//     path + 'radar_3.png',
//     path + 'radar_4.png'
//   ],
//   sirkel: [
//     path + 'sirkel_1.png',
//     path + 'sirkel_2.png',
//     path + 'sirkel_3.png',
//     path + 'sirkel_4.png',
//     path + 'sirkel_5.png',
//     path + 'sirkel_6.png',
//     path + 'sirkel_7.png'
//   ],
//   stjerne: [
//     path + 'stjerne_1.png',
//     path + 'stjerne_2.png',
//     path + 'stjerne_3.png',
//     path + 'stjerne_4.png'
//   ],
//   strek: [path + 'strek_1.png', path + 'strek_2.png'],
//   streker: [
//     path + 'streker_1.png',
//     path + 'streker_2.png',
//     path + 'streker_3.png'
//   ],
//   ellipses: [path + 'tre_smaa_sirklel-prikker.png']
// }
const doodles = {
  blubb: [
    "blubb_1.png",
    "blubb_2.png",
    "blubb_3.png",
    "blubb_4.png",
    "blubb_5.png",
    "blubb_6.png",
  ],
  bolgestrek: [
    "bolgestrek_1.png",
    "bolgestrek_2.png",
    "bolgestrek_3.png",
    "bolgestrek_4.png",
  ],
  highlights: ["highlights_1.png", "highlights_2.png"],
  radar: ["radar_1.png", "radar_2.png", "radar_3.png", "radar_4.png"],
  sirkel: [
    "sirkel_1.png",
    "sirkel_2.png",
    "sirkel_3.png",
    "sirkel_4.png",
    "sirkel_5.png",
    "sirkel_6.png",
  ],
  stjerne: ["stjerne_1.png", "stjerne_2.png", "stjerne_3.png", "stjerne_4.png"],
  strek: ["strek_1.png", "strek_2.png"],
  streker: ["streker_1.png", "streker_2.png", "streker_3.png"],
  ellipses: [
    "tre_smaa_sirklel-prikker_1.png",
    "tre_smaa_sirklel-prikker_2.png",
  ],
}

export default doodles

const randomDoodles = Object.assign(
  {},
  {
    sirkel: doodles.sirkel,
    stjerne: doodles.stjerne,
    radar: doodles.radar,
    highlights: doodles.highlights,
  }
)

export const getDoodleByType = type => {
  let doodleType = doodles[type]

  if (type === "random") {
    const keys = Object.keys(randomDoodles)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    doodleType = randomDoodles[randomKey]
  }
  return `${getPath()}${
    doodleType[Math.floor(Math.random() * doodleType.length)]
  }`
}
