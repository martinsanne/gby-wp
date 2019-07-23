import React, { Component, createRef } from "react"
import Search from "./Search"

const cleanSearch = str => {
  return str //str.replace(/[^a-zA-Z0-9\-_+ ]/g, '')
}

class SearchContainer extends Component {
  input = createRef()

  state = {
    query: "",
    results: [],
    loading: false,
    submitted: false,
    page: null,
  }

  componentDidMount = () => {
    this.inputFocusTimer = setTimeout(() => {
      this.input.current.focus()
    }, 300)

    // Search on initial load based on query
    // if (this.props.match.params && this.props.match.params.query) {
    //   this.setState({ query: this.props.match.params.query }, () => {
    //     this.search()
    //   })
    // }
  }

  clearSearch = () => {
    this.setState({ query: "" }, () => {
      this.search()
      this.input.current.focus()
    })
  }

  componentWillUnmount = () => {
    if (this.inputFocusTimer) {
      clearTimeout(this.inputFocusTimer)
    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value,
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.handleSearch()
  }

  handleSearch = () => {
    this.search()
  }

  loadMore = () => {
    this.search(this.state.meta.current_page + 1)
  }

  search = (page = 1) => {
    const query = cleanSearch(this.state.query)
    if (!query) {
      this.setState({
        loading: false,
        query: "",
        results: [],
        submitted: false,
      })

      // this.props.history.replace('/search/', {})
    } else {
      let newState = {
        loading: true,
      }
      if (this.state.query !== this.state.submitted) {
        newState.submitted = this.state.query
        newState.results = []
      }

      this.setState(newState)

      fetch(
        `https://api.oyafestivalen.no/wp-json/hey/v1/search?s=${query}&page=${page}`
      )
        .then(response => response.json())
        .then(res => {
          this.setState(
            prevState => ({
              results:
                page === 1
                  ? res.results
                  : [...prevState.results, ...res.results],
              meta: res.meta,
              loading: false,
            }),
            () => {
              // Add url parameter for successful search to make it possible to share results
              // this.props.history.replace('/search/' + query, {})
            }
          )
        })
        .catch(err => {
          this.setState({
            loading: false,
            results: [],
          })
        })
    }
  }

  render() {
    const { query, results, meta, loading, submitted } = this.state

    const props = {
      query,
      results,
      resultTotal: (meta && meta.result_total) || 0,
      currentPage: (meta && meta.current_page) || 0,
      totalPages: (meta && meta.total_pages) || 0,
      loading,
      input: this.input,
      submitted,
    }

    const actions = {
      clearSearch: this.clearSearch,
      handleChange: this.handleChange,
      loadMore: this.loadMore,
      submitHandler: this.submitHandler,
    }

    return (
      <article className="Page">
        <Search actions={actions} {...props} />
      </article>
    )
  }
}

export default SearchContainer
