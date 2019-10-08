import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import Button from "./utils/Button"

export default class PostLoadButton extends Component {
  render() {
    return (
      <div className="BlogPage__action">
        <Button
          disabled={this.props.loading}
          className="button"
          onClick={this.props.loadMore}
        >
          {this.props.loading ? (
            <FormattedMessage id="button.loading" defaultMessage="Loading" />
          ) : (
            <FormattedMessage id="button.loadMore" defaultMessage="Load more" />
          )}
        </Button>
      </div>
    )
  }
}
