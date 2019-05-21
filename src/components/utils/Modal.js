import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import messages from "./Modal.messages"
import Portal from "./Portal"

export default class Modal extends Component {
  render() {
    return (
      <Portal>
        <div className="Modal">
          <div className="Modal__background" onClick={this.props.close} />
          <div className="Modal__container">
            <div className="Modal__content">
              <div className="Modal__header">
                <button className="Modal__close" onClick={this.props.close}>
                  <FormattedMessage {...messages.close} />
                </button>
              </div>
              <div className="Modal__body">{this.props.children}</div>
            </div>
          </div>
        </div>
      </Portal>
    )
  }
}
