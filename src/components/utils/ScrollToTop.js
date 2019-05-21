const ScrollToTop = () => {
  window.scrollTo(0, 0)
  if (this.props.children) {
    return this.props.children
  } else {
    return null
  }
}

export default ScrollToTop
