import React, { Component } from "react"
import TemplateResolver from "../../components/TemplateResolver"
import Layout from "../../components/layout"
import parse from "url-parse"

const normalizePageData = page => {
  const newData = { ...page }
  newData.title = page.title.rendered
  newData.excerpt = page.excerpt.rendered
  newData.content = page.content.rendered
  newData.wordpress_id = page.id
  newData.template = ""
  return newData
}

export default class Preview extends Component {
  state = {
    data: null,
    loading: true,
    error: false,
    locale: false,
  }

  componentDidMount() {
    const { query } = parse(this.props.location.search, true)

    if (query.id && query.type && query.lang) {
      this.setState({ locale: query.lang })

      const endpoints = {
        page: "pages",
        post: "posts",
      }

      const endpoint = endpoints[query.type]

      fetch(
        `https://api.oyafestivalen.no/wp-json/wp/v2/${endpoint}/${query.id}/revisions`,
        {
          method: "get",
          credentials: "include",
        }
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            data,
            loading: false,
          })
        })
        .catch(error => {
          console.warn(error)
          this.setState({
            loading: false,
            error: "You must be logged in to see this page.",
          })
        })
    } else {
      this.setState({
        loading: false,
        error:
          "Expected query string with the following parameters ?id={}&type={}&lang={}",
      })
    }
  }

  render() {
    const { data, loading, error, locale } = this.state
    if (loading) {
      return <div>Loading preview</div>
    }
    if (error) {
      return <div>{error}</div>
    }
    const page = normalizePageData(data[0])
    return (
      <Layout locale={locale}>
        <div className="Preview">
          <p className="Preview__disclaimer">
            This is a preview. Some things might not work entirely as expected.
          </p>
          <div className="Preview__content">
            <TemplateResolver page={page} locale={locale} />
          </div>
        </div>
      </Layout>
    )
  }
}
