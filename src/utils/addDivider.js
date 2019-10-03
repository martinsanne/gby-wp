/**
 * 
 * This function assumes a `__divider` element and `__divider--hide` modifier 
 * in your markup
 * 
 * @param {array} items array of html elements
 * @param {string} className Block classname
 * 
 * Example usage:
 * useEffect(() => {
    const items = [...wrapper.current.querySelectorAll(".HeadlinerArtists__item")]
    if (items) {
      addDivider(items, 'Artists')
    }
  })
 */

export default function addDivider(items, className) {
  if (!Array.isArray(items)) return items
  items.map((item, i) => {
    // reset state
    const divider = item.querySelector(`.${className}__divider`)
    divider && divider.classList.remove(`${className}__divider--hide`)

    const nextItem = items[i + 1]
    const itemRect = item?.getBoundingClientRect()
    const nextItemTop = nextItem?.getBoundingClientRect().top

    // Check if they're on the same line
    if (nextItem && nextItemTop > itemRect.top + itemRect.height / 4) {
      // hide divider if they're on the same line
      divider && divider.classList.add(`${className}__divider--hide`)
    }
    // Always hide last divider
    if (i === items.length - 1 && divider) {
      divider.classList.add(`${className}__divider--hide`)
    }
    return null
  })
}
