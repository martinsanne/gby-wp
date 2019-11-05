import React, { useEffect } from "react"
import { FormattedMessage } from "react-intl"
import cc from "classcat"
import useSessionstorage from "@rooks/use-sessionstorage"
import useTimeout from "@rooks/use-timeout"

import { AppConsumer, Illustration } from "./utils"
import Button from "./utils/Button"

const BuyTicket = ({ className }) => {
  const [value, set] = useSessionstorage("spider-has-animated", 0)

  const { start } = useTimeout(() => {
    set(1)
  }, 5000)

  useEffect(() => {
    start()
  }, [start])

  return (
    <AppConsumer>
      {ctx => {
        const { options } = ctx.state
        return (
          <div
            className={cc({
              BuyTicket: true,
              "BuyTicket--no-animation": value === 1,
              [className]: className,
            })}
          >
            <Illustration
              className="BuyTicket__illustration"
              src="illustrations/spider.png"
            />
            {options && options.options && options.options.tickets_url && (
              <Button
                asLink
                noClass
                className="BuyTicket__bubble"
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
              </Button>
            )}
          </div>
        )
      }}
    </AppConsumer>
  )
}

export default BuyTicket
