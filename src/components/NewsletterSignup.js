import React, { useRef, useState, useEffect } from "react"
import { FormattedMessage } from "react-intl"
import cc from "classcat"

import messages from "./NewsletterSignup.messages"
import Button from "./utils/Button"

const NewsletterSignup = ({ className, focusOnMount, onDark }) => {
  const timerRef = useRef(null)
  const mainInput = useRef(null)
  const [status, setStatus] = useState("initial")
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)

  const componentDidMount = () => {
    if (focusOnMount && mainInput && mainInput.current) {
      timerRef.current = setTimeout(() => {
        mainInput.current.focus()
      }, 300)
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }

  const submitHandler = e => {
    e.preventDefault()
    setStatus("submitting")
    fetch("/.netlify/functions/makeNewsletterSignup", {
      method: "POST",
      body: JSON.stringify({ email, consent }),
    })
      .then(res => res.json())
      .then(res => {
        setStatus("success")
        setEmail("")
        setConsent(false)
      })
      .catch(err => {
        setStatus("error")
      })
  }

  const onEmailChange = e => {
    setEmail(e.target.value)
  }

  const onConsentChange = e => {
    setConsent(Boolean(e.target.checked))
  }

  useEffect(componentDidMount, [focusOnMount])

  if (status === "success") {
    return (
      <div className={className}>
        <div className="Form__status">
          <h3>
            <FormattedMessage {...messages.successTitle} />
          </h3>
          <p>
            <FormattedMessage {...messages.success} />
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <h4 className="NewsletterSignup__title">
        <FormattedMessage {...messages.title} />
      </h4>
      <div className="NewsletterSignup__desc">
        <FormattedMessage
          id="newsletter.intro"
          defaultMessage="Ikke gå glipp av nyheter og annet eksklusivt innhold. Abbonner på nyhetsbrevet vårt."
        />
        <details className="NewsletterSignup__details">
          <summary>
            <FormattedMessage {...messages.read} />
          </summary>
          <FormattedMessage {...messages.consent} />
        </details>
      </div>
      <form
        className={cc({
          Form: true,
          "Form--onDark": onDark,
        })}
        onSubmit={submitHandler}
      >
        <label className="Form__label Form__label--checkbox">
          <input
            className="Form__checkbox"
            name="consent"
            onChange={onConsentChange}
            type="checkbox"
          />
          <FormattedMessage {...messages.consentLabel} />
        </label>
        <label htmlFor="newsletter" className="Form__inputs">
          <FormattedMessage {...messages.inputPlaceholder}>
            {text => (
              <input
                ref={mainInput}
                onChange={onEmailChange}
                className="Form__input Form__input--email"
                type="email"
                name="email"
                id="newsletter"
                placeholder={text}
                value={email}
              />
            )}
          </FormattedMessage>
          <Button
            noClass
            disabled={!consent || status === "submitting"}
            className="Form__submit button"
            type="submit"
          >
            <FormattedMessage {...messages.buttonSubmit} />
          </Button>
        </label>
        {status === "submitting" && (
          <div className="Form__status">
            <FormattedMessage {...messages.sending} />
          </div>
        )}
        {status === "error" && (
          <div className="Form__status">
            <FormattedMessage {...messages.error} />
          </div>
        )}
      </form>
    </div>
  )
}

export default NewsletterSignup
