import React, { Component, createContext } from "react"

export const AppContext = createContext()

export class AppProvider extends Component {
  state = {
    hideSpider: false,
    showMenu: false,
    locale: this.props.locale,
    translations: this.props.translations,
    options: this.props.options,
    settings: this.props.settings,
  }

  toggleMenu = () => {
    this.setState(
      prevState => ({ showMenu: !prevState.showMenu }),
      () => this.noScroll()
    )
  }

  closeMenu = () => {
    this.setState(
      {
        showMenu: false,
      },
      () => this.noScroll()
    )
  }

  noScroll = () => {
    document.querySelector("body").style.cssText = this.state.showMenu
      ? "overflow: hidden; height: 100vh"
      : ""
    document.querySelector("html").style.cssText = this.state.showMenu
      ? "overflow: hidden; height: 100vh"
      : ""
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          actions: {
            toggleMenu: this.toggleMenu,
            closeMenu: this.closeMenu,
            setHideSpider: hideSpider => {
              this.setState(() => ({ hideSpider }))
            },
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
export const AppConsumer = AppContext.Consumer
