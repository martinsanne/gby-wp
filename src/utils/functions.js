export const listToTree = (
  originalList,
  idKey = "wordpress_id",
  pidKey = "menu_item_parent",
  childrenKey = "children"
) => {
  const map = {}
  const roots = []
  const list = [...originalList] // clone list to prevent messing up state

  /**
   * Create containers
   */
  list.forEach((item, i) => {
    map[list[i][idKey]] = i
    list[i][childrenKey] = []
  })

  /**
   * Map items to containers
   */
  list.forEach((item, i) => {
    item = list[i]
    if (item[pidKey] && item[pidKey] !== "0") {
      list[map[item[pidKey]]][childrenKey].push(item)
    } else {
      roots.push(item)
    }
  })

  return roots
}

export const range = (end, start = 0, step = 1) => {
  return Array.from(
    { length: Math.ceil((end - start + 1) / step) },
    (v, i) => i * step + start
  )
}

const getBlogMinYear = () => {
  return 2007
}

const getBlogMaxYear = () => {
  return new Date().getFullYear()
}

export const getBlogYearRange = () => {
  return range(getBlogMaxYear(), getBlogMinYear()).reverse()
}

export const between = (x, min, max) => {
  return x >= min && x <= max
}

export const validateBlogYear = year => {
  return between(year, getBlogMinYear(), getBlogMaxYear())
}

export const getSelectedYear = search => {
  const urlParams = new URLSearchParams(search)
  let year = urlParams.get("year")
  if (!validateBlogYear(year)) {
    year = false
  }
  return year
}
