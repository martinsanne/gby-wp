import React from "react"
import cc from "classcat"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"
import { listToTree } from "../utils/functions"
import NavMenuLink from "./NavMenuLink"
import MenuModal from "./MenuModal"
import {
  AppConsumer,
  Portal,
  VisuallyHidden,
  StaticPageLink,
  FontToggle,
} from "./utils"

const MenuItem = ({ item, child, closeMenu }) => {
  return (
    <li
      className={cc({
        Menu__item: true,
        "Menu__item--hidden": true,
        "Menu__item--child": child,
      })}
    >
      <NavMenuLink
        className="Menu__link"
        to={item.url}
        titleAttr={item.attr_title}
        target={item.target}
      >
        {item.title}
      </NavMenuLink>
    </li>
  )
}

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressHeyMenus {
        edges {
          node {
            location
            locale
            items {
              url
              wordpress_id
              title
              menu_item_parent
              guid
            }
          }
        }
      }
    }
  `)

  return (
    <AppConsumer>
      {({ state, actions }) => {
        const { locale } = state

        const menus = data.allWordpressHeyMenus.edges
        const primaryMenu = menus.filter(item => {
          return item.node.locale === locale && item.node.location === "primary"
        })

        const items = primaryMenu[0].node.items

        const treeList = listToTree(items)
        const menu = treeList.filter(item => item.url === "#")[0]
        return (
          <>
            <ul className={cc({ Menu: true, "Menu--light": state.showMenu })}>
              {items
                .filter(
                  item => item.menu_item_parent === "0" && item.url !== "#"
                )
                .map((item, i) => (
                  <MenuItem key={item.guid} item={item} />
                ))}
              {menu && (
                <li className="Menu__item">
                  <button
                    className={cc({
                      Menu__link: true,
                      "Menu__link--is-active": state.showMenu,
                    })}
                    onClick={actions.toggleMenu}
                  >
                    {state.showMenu ? (
                      <FontToggle i={2}>
                        <FormattedMessage id="modal.close">
                          {text => text}
                        </FormattedMessage>
                      </FontToggle>
                    ) : (
                      <FontToggle i={2}>{menu.title}</FontToggle>
                    )}
                  </button>
                </li>
              )}
              <li className="Menu__item Menu__search">
                <FormattedMessage id="search.title" defaultMessage={`Søk`}>
                  {text => (
                    <StaticPageLink
                      pageType="search"
                      className="Menu__link"
                      activeClassName="Menu__link--is-active"
                      onClick={actions.closeMenu}
                    >
                      {text}
                    </StaticPageLink>
                  )}
                </FormattedMessage>
              </li>
            </ul>
            {menu && menu.children && state.showMenu && (
              <Portal>
                <MenuModal
                  items={menu.children}
                  parentItems={items.filter(
                    item => item.menu_item_parent === "0" && item.url !== "#"
                  )}
                />
              </Portal>
            )}
            {menu && menu.children && (
              <VisuallyHidden>
                <MenuModal items={menu.children} tabIndex="-1" />
              </VisuallyHidden>
            )}
          </>
        )
      }}
    </AppConsumer>
  )
}

export default Menu
