import React, { Component } from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"
import { AppConsumer, Doodle } from "./utils"
import LanguageSwitcher from "./LanguageSwitcher"

export default class MenuModal extends Component {
  static defaultProps = {
    tabIndex: 1,
  }
  render() {
    const { items, parentItems } = this.props
    return (
      <AppConsumer>
        {({ Appactions }) => (
          <div className="MenuModal">
            <Doodle onDark>
              <Doodle onDark>
                <Doodle onDark>
                  <nav className="MenuModal__list">
                    <div className="MenuModal__lang MenuModal__link">
                      <LanguageSwitcher />
                    </div>
                    <Link
                      className="MenuModal__link MenuModal__link--parent"
                      to={"/"}
                      onClick={() => Appactions.closeMenu()}
                      tabIndex={this.props.tabIndex}
                    >
                      <FormattedMessage
                        id="search.title"
                        defaultMessage={`Søk`}
                      >
                        {text => text}
                      </FormattedMessage>
                    </Link>
                    {parentItems &&
                      parentItems.map(item => (
                        <Link
                          key={`MenuModalItem-${item.wordpress_id}`}
                          className="MenuModal__link MenuModal__link--parent"
                          to={item.url}
                          onClick={() => Appactions.closeMenu()}
                          tabIndex={this.props.tabIndex}
                        >
                          {item.title}
                        </Link>
                      ))}
                    {items.map(item => (
                      <Link
                        key={`MenuModalItem-${item.wordpress_id}`}
                        className="MenuModal__link"
                        to={item.url}
                        onClick={() => Appactions.closeMenu()}
                        tabIndex={this.props.tabIndex}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </Doodle>
              </Doodle>
            </Doodle>
          </div>
        )}
      </AppConsumer>
    )
  }
}
