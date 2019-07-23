import React, { Component } from "react"
import { FormattedMessage } from "react-intl"

export default class PostLoadButton extends Component {
  render() {
    return (
      <div className="BlogPage__action">
        <button
          disabled={this.props.loading}
          className="button"
          onClick={this.props.loadMore}
        >
          {this.props.loading ? (
            <FormattedMessage id="button.loading" defaultMessage="Loading" />
          ) : (
            <FormattedMessage id="button.loadMore" defaultMessage="Load more" />
          )}
        </button>
      </div>
    )
  }
}
