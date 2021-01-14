import React, { useContext } from "react"
import { FormattedMessage } from "react-intl"
import Button from "./styled/Button"
import { AppConsumer } from "./utils"

const BuyTicketButton = () => {
  const { state } = useContext(AppConsumer)
  const ticketUrl = state?.options?.options?.tickets_url || undefined
  const ticketText = state?.options?.options?.tickets_button_text || undefined

  if (!ticketUrl) {
    return null
  }

  return (
    <Button as="a" href={ticketUrl} target="_blank" rel="noopener noreferrer">
      {ticketText || (
        <FormattedMessage id="header.buyButton" defaultMessage="Buy tickets!" />
      )}
    </Button>
  )
}

export default BuyTicketButton
