import React, { Component } from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr"
import { Html, Overlay, FeaturedImageAspect } from "./utils"
import { FormattedMessage } from "react-intl"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  getIndex = () => {
    // Create an elastic lunr index and hydrate with graphql query results
    // Cache the index object to prevent Index.load on every call
    return this.index ? this.index : Index.load(this.props.searchIndex)
  }

  getExcerpt = (content, query) => {
    const excerptLength = 160
    let before = ""
    // Get first occurance of queried word in string
    let startAt = content.indexOf(query)
    // If no occurances, make sure to start excerpt at beginning
    if (!startAt || startAt < 10) {
      startAt = 0
    } else {
      // Try to cut the string a bit ahead to see the word in context
      startAt = Math.round(startAt - 20)
      const firstSpaceAfterStartAt = content.substr(startAt - 20).indexOf(" ")
      startAt = Math.round(startAt - 20 + firstSpaceAfterStartAt + 1)
      // If word appears early in content, show text from beginning of string
      if (startAt <= 0) {
        startAt = 0
      } else {
        // Add ellipsis before if string has been cut at the beginning
        before = "…"
      }
    }
    content = content.substr(startAt, excerptLength)
    content = content.replace(query, `<strong>${query}</strong>`)
    return `${before}${content}…`
  }

  search = evt => {
    const query = evt.target.value
    this.index = this.getIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref, score }) => {
          return this.index.documentStore.getDoc(ref)
        })
        // Make sure we show items for the current locale only
        .filter(item => item.locale === this.props.locale),
    })
  }

  render() {
    let { results, query } = this.state
    const resultTotal = results.length
    results = results.slice(0, 20)
    return (
      <div className="Search">
        <header className="Search__header">
          <form className="Search__form">
            <FormattedMessage id="search.placeholder" defaultMessage="Søk her">
              {placeholder => (
                <input
                  className="Search__input"
                  type="text"
                  value={query}
                  onChange={this.search}
                  placeholder={placeholder}
                />
              )}
            </FormattedMessage>
            {/* <button className="Search__submit button" type="submit" value="">
              <FormattedMessage id="search.submit" defaultMessage="Search" />
            </button> */}
          </form>
          {query.length > 0 && (
            <p>
              <FormattedMessage
                id="search.results"
                defaultMessage={`Found {resultTotal} results for "{queryString}"`}
                values={{ resultTotal, queryString: query }}
              />
            </p>
          )}
        </header>
        {results.length > 0 && (
          <ul className="SearchResults">
            {results.map(page => (
              <li className="SearchResults__item" key={page.id}>
                <Link className="SearchResults__link" to={page.link}>
                  <div className="SearchResults__content">
                    <h3 className="SearchResults__title">
                      <Html content={page.title} />
                    </h3>
                    {page.content && (
                      <div className="SearchResults__excerpt">
                        <Html content={this.getExcerpt(page.content, query)} />
                      </div>
                    )}
                    {/* {page.excerpt && (
                      <div className="SearchResults__excerpt">
                        <Html content={this.getExcerpt(page.excerpt, query)} />
                      </div>
                    )} */}
                  </div>
                  {page.featured_image && (
                    <div className="SearchResults__media">
                      <Overlay hoverable>
                        <FeaturedImageAspect
                          className="SearchResults__image aspect-sm--square"
                          {...page.featured_image}
                          maxWidth={300}
                        />
                      </Overlay>
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
