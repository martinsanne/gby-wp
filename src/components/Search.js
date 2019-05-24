import React, { Component } from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr"
import { Html, FeaturedImage } from "./utils"

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

  search = evt => {
    const query = evt.target.value
    this.index = this.getIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
        // Make sure we show items for the current locale only
        .filter(item => item.locale === this.props.locale),
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul>
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={page.link}>
                <Html content={page.title} />
              </Link>
              {page.featured_image && (
                <FeaturedImage {...page.featured_image} maxWidth={400} />
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
