import React from "react"
import { FormattedMessage } from "react-intl"
import cc from "classcat"

import { AppConsumer, Illustration } from "./utils"
import Button from "./utils/Button"

const BuyTicket = ({ className }) => {
  return (
    <AppConsumer>
      {ctx => {
        const { options } = ctx.state
        return (
          <div
            className={cc({
              BuyTicket: true,
              [className]: className,
            })}
          >
            <Illustration
              className="BuyTicket__illustration"
              name="edderkopp"
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
