import React, { Component } from "react"
import { Link } from "gatsby"

import { FeaturedImageAspect, Overlay, Html, Loader } from "./utils"
import PostLoadButton from "./PostLoadButton"
import { FormattedMessage } from "react-intl"

export default class Search extends Component {
  render() {
    const {
      input,
      query,
      actions,
      results,
      resultTotal,
      loading,
      submitted,
      currentPage,
      totalPages,
    } = this.props
    return (
      <div className="Search">
        <header className="Search__header">
          <form className="Search__form" onSubmit={actions.submitHandler}>
            <div className="Search__input-wrapper">
              {query && (
                <button
                  className="Search__clear"
                  type="button"
                  onClick={actions.clearSearch}
                >
                  &times;
                </button>
              )}
              <FormattedMessage
                id="search.placeholder"
                defaultMessage="Søk her"
              >
                {placeholder => (
                  <input
                    name="search"
                    className="Search__input"
                    ref={input}
                    type="text"
                    value={query}
                    onChange={actions.handleChange}
                    placeholder={placeholder}
                  />
                )}
              </FormattedMessage>
            </div>
            {/* the submit button enables native submitting on enter */}
            <button className="Search__submit button" type="submit" value="">
              <FormattedMessage id="search.submit" defaultMessage="Search" />
            </button>
          </form>
          {loading && (
            <div>
              <FormattedMessage
                id="search.searching"
                defaultMessage={`Searching for "{queryString}"`}
                values={{ queryString: submitted }}
              />
              <Loader />
            </div>
          )}
          {results.length > 0 && (
            <p>
              <FormattedMessage
                id="search.results"
                defaultMessage={`Found {resultTotal} results for "{queryString}"`}
                values={{ resultTotal, queryString: submitted }}
              />
            </p>
          )}
        </header>
        {results.length > 0 && (
          <div className="SearchResults">
            {results.map(item => (
              <div className="SearchResults__item" key={item.id}>
                <Link className="SearchResults__link" to={item.link}>
                  <div className="SearchResults__content">
                    <h3 className="SearchResults__title">
                      <Html content={item.title.rendered} />
                    </h3>
                    {item.excerpt && (
                      <div className="SearchResults__excerpt">
                        <Html content={item.excerpt.rendered} />
                      </div>
                    )}
                  </div>
                  {item.featured_image && (
                    <div className="SearchResults__media">
                      <Overlay hoverable>
                        <FeaturedImageAspect
                          className="SearchResults__image aspect-sm--square"
                          {...item.featured_image}
                          maxWidth={300}
                        />
                      </Overlay>
                    </div>
                  )}
                </Link>
              </div>
            ))}
            {currentPage && totalPages && currentPage < totalPages && (
              <PostLoadButton loadMore={actions.loadMore} loading={loading} />
            )}
          </div>
        )}
        {query && results && results.length === 0 && !loading && submitted && (
          <div className="Search__no-hits">
            <h2 className="Search__title">
              <FormattedMessage
                id="search.noresults"
                defaultMessage={`Sorry, no results for "{queryString}"`}
                values={{ queryString: submitted }}
              />
            </h2>
            <button className="button" onClick={actions.clearSearch}>
              <FormattedMessage
                id="search.noresultsMessage"
                defaultMessage={`Prøv en annen søketerm`}
              />
            </button>
          </div>
        )}
      </div>
    )
  }
}
