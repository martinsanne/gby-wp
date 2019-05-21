import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import cc from "classcat"

import messages from "./NewsletterSignup.messages"

export default class NewsletterSignup extends Component {
  mainInput = React.createRef()

  state = {
    consent: false,
    email: "",
    submitting: false,
    success: false,
    error: false,
    isTrident: false,
  }

  componentDidMount = () => {
    if (this.props.focusOnMount && this.mainInput && this.mainInput.current) {
      this.setFocusTimer = setTimeout(() => {
        this.mainInput.current.focus()
      }, 300)
    }

    if (window && window.navigator.userAgent.includes("Trident/")) {
      this.setState({
        isTrident: true,
      })
    }
  }

  componentWillUnmount = () => {
    if (this.setFocusTimer) {
      clearTimeout(this.setFocusTimer)
    }
  }

  submitHandler = e => {
    e.preventDefault()

    this.setState({
      submitting: true,
      error: false,
      success: false,
    })
    // Validate email first!
    fetch("/.netlify/functions/makeNewsletterSignup", {
      method: "POST",
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          submitting: false,
          success: true,
          email: "",
          consent: false,
        })
      })
      .catch(err => {
        this.setState({
          submitting: true,
          error: true,
        })
        console.log("newsletter err", err)
      })
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onCheckboxChange = e => {
    // if (e.target.checked) {
    //   trackEvent({ event: 'Step 2' })
    // }
    this.setState({
      [e.target.name]: e.target.checked,
    })
  }

  render() {
    const { onDark } = this.props
    const { consent, email, success, submitting, isTrident } = this.state
    if (success) {
      return (
        <div className="NewsletterSignup NewsletterSignup--success">
          <h3>Skjemaet ble sendt</h3>
          <p>
            <FormattedMessage {...messages.success} />
          </p>
        </div>
      )
    }
    return (
      <div className="NewsletterSignup">
        <h3 className="NewsletterSignup__title">
          <FormattedMessage {...messages.title} />
        </h3>
        {!isTrident ? (
          <details className="NewsletterSignup__desc">
            <summary>
              <FormattedMessage {...messages.read} />
            </summary>
            <FormattedMessage {...messages.consent} />
          </details>
        ) : (
          <div className="NewsletterSignup__desc">
            <FormattedMessage {...messages.consent} />
          </div>
        )}
        <form
          className={cc({
            Form: true,
            "Form--newsletter": true,
            "Form--onDark": onDark,
          })}
          onSubmit={this.submitHandler}
        >
          <label className="Form__label">
            <input
              className="Form__checkbox"
              name="consent"
              onChange={this.onCheckboxChange}
              type="checkbox"
            />
            <FormattedMessage {...messages.consentLabel} />
          </label>
          <label htmlFor="newsletter" className="Form__block Form__block--flex">
            <FormattedMessage {...messages.inputPlaceholder}>
              {text => (
                <input
                  ref={this.mainInput}
                  onChange={this.onInputChange}
                  className="Form__input Form__input--email"
                  type="email"
                  name="email"
                  id="newsletter"
                  placeholder={text}
                  value={email}
                />
              )}
            </FormattedMessage>
            <button
              disabled={!consent || submitting}
              className="Form__submit button"
              type="submit"
            >
              <FormattedMessage {...messages.buttonSubmit} />
            </button>
          </label>
          {submitting && (
            <div className="Form__submitting">
              <FormattedMessage {...messages.sending} />
            </div>
          )}
        </form>
      </div>
    )
  }
}
