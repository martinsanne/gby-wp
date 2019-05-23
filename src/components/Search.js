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

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
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
              {/* <Html content={page.content} /> */}
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
