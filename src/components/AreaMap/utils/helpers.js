// import me from 'assets/icons/me.png'
// import bar from 'assets/icons/bar.svg'
// import coffee from 'assets/icons/coffee.svg'
// import drinks from 'assets/icons/drinks.svg'
// import bike from 'assets/icons/bike.svg'
// import entrance from 'assets/icons/entrance.svg'
// import exit from 'assets/icons/exit.svg'
// import firstaid from 'assets/icons/firstaid.svg'
// import handicap from 'assets/icons/handicap.svg'
// import food from 'assets/icons/food.svg'
// import snacks from 'assets/icons/snacks.svg'
// import info from 'assets/icons/info.svg'
// import minioya from 'assets/icons/minioya.svg'
// import recycle from 'assets/icons/recycle.svg'
// import toilet from 'assets/icons/toilet.svg'
// import handicaptoilet from 'assets/icons/handicap-toilet.svg'
// import merch from 'assets/icons/merch.svg'
// import partner from 'assets/icons/partner.svg'
// import stage from 'assets/icons/stage.svg'
// import wardrobe from 'assets/icons/wardrobe.svg'
// import water from 'assets/icons/water.svg'
const me = `../assets/icons/me.png`
const bar = `../assets/icons/bar.svg`
const coffee = `../assets/icons/coffee.svg`
const drinks = `../assets/icons/drinks.svg`
const bike = `../assets/icons/bike.svg`
const entrance = `../assets/icons/entrance.svg`
const exitUp = `../assets/icons/exit-up.svg`
const exitDown = `../assets/icons/exit-down.svg`
const exitDownLeft = `../assets/icons/exit-left-down.svg`
const firstaid = `../assets/icons/firstaid.svg`
const handicap = `../assets/icons/handicap.svg`
const food = `../assets/icons/food.svg`
const snacks = `../assets/icons/snacks.svg`
const info = `../assets/icons/info.svg`
const minioya = `../assets/icons/minioya.svg`
const recycle = `../assets/icons/recycle.svg`
const toilet = `../assets/icons/toilet.svg`
const handicaptoilet = `../assets/icons/handicap-toilet.svg`
const merch = `../assets/icons/merch.svg`
const partner = `../assets/icons/partner.svg`
const stage = `../assets/icons/stage.svg`
const wardrobe = `../assets/icons/wardrobe.svg`
const water = `../assets/icons/water.svg`

/*
Icon codes:
1899 = Regular poi (do not use)
1733 = Toilet
1608 = info
1742 = baby / miniøya
1522 = sykkel / sykkelparkering
1558 = Førstehjelp
1518 = Drink / bar (icon of glass with waterdrop)
1517 = Cocktail / bar (icon martini glass)
1534 = Coffee
1549 = wardrobe
1577 = Restaurant
1850 = Resirkulering
1549 = Sponsor merch (icon coat hanger)
1637 = Sponsor Big dipper (icon music note)
1703 = Vannpunkt
1732 = handicap toilet
1735 = handicap
1782 = inngang
1803 = exit (icon door)
1680 = exit after 22 (icon running man)
1785 = exit down left
1709 = stage (icon masks theatre)
1886 = popcorn (icon Tree (Deciduous))
1607 = ice cream
1657 = Merch (icon police)
1753 = sponsors (icon money (atm))

Colors:
"000000" -> "Område og scener"
"FBC02D" -> "Praktiske punkter"
"FF5252" -> "Drikke og snacks"
"C2185B" -> "Mat og miljø"
"0F9D58" -> "Sponsorstands"
"0288D1" -> "Tilgjengelighet"
"757575"
*/

export function getIcon(icon, name) {
  let res
  switch (icon) {
    case 1732:
      res = handicaptoilet
      break
    case 1733:
      res = toilet
      break
    case 1608:
      res = info
      break
    case 1742:
      res = minioya
      break
    case 1522:
      res = bike
      break
    case 1558:
      res = firstaid
      break
    case 1518:
      res = bar
      break
    case 1517:
      res = drinks
      break
    case 1534:
      res = coffee
      break
    case 1577:
      res = food
      break
    case 1850:
      res = recycle
      break
    case 1549:
      res = wardrobe
      break
    case 1637:
      res = partner
      break
    case 1703:
      res = water
      break
    case 1735:
      res = handicap
      break
    case 1783:
      res = entrance
      break
    case 1785:
      res = exitDownLeft
      break
    case 1803:
      res = exitUp
      break
    case 1657:
      res = merch
      break
    case 1680:
      // res = exit10
      res = exitDown
      break
    case 1709:
      res = stage
      break
    case 1886:
      res = snacks
      break
    case 1607:
      res = snacks
      break
    case 1753:
      res = partner
      break
    default:
      res = me
  }
  return res
}

export function getIconSize(google, icon) {
  let size = [30]
  if (icon === 1680) {
    size = [60]
  }
  // return size object
  if (size.length === 1) {
    size = [size[0], size[0]]
  } else {
    size = [size[0], size[1]]
  }
  // return new google.maps.Size(size[0], size[1])
  return size
}

export const getPolygonColor = name => {
  const colors = {
    Amfiet: "#127BBF",
    Vindfruen: "#18A676",
    Sirkus: "#D41684",
    Klubben: "#D09293",
    Biblioteket: "#F3E143",
    Fortum: "#E88154",
    Publikumsområde: "#27A75C",
  }

  return colors[name] || "#ff0000"
}
