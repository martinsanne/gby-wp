import React, { useEffect, useContext } from "react"
import { FormattedMessage } from "react-intl"
import cc from "classcat"
import useSessionstorage from "@rooks/use-sessionstorage"
import useTimeout from "@rooks/use-timeout"
import { AppContext, Illustration } from "./utils"

const BuyTicketSpider = ({ className }) => {
  const { state } = useContext(AppContext)
  const { options } = state
  const [hasAnimated, setHasAnimated] = useSessionstorage(
    "spider-has-animated",
    0
  )

  const { start } = useTimeout(() => {
    setHasAnimated(1)
  }, 5000)

  useEffect(() => {
    start()
  }, [start])

  return (
    <div
      className={cc({
        BuyTicketSpider: true,
        "BuyTicketSpider--no-animation": hasAnimated === 1,
        [className]: className,
        "BuyTicketSpider--hidden": state.hideSpider,
      })}
    >
      <Illustration
        className="BuyTicketSpider__illustration"
        src="illustrations/spider.png"
      />
      {options && options.options && options.options.tickets_url && (
        <a
          className="BuyTicketSpider__bubble"
          href={options.options.tickets_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {options.options.tickets_button_text || (
            <FormattedMessage
              id="header.buyButton"
              defaultMessage="Buy tickets"
            />
          )}
        </a>
      )}
    </div>
  )
}

export default BuyTicketSpider
