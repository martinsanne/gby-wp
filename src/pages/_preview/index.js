import React, { Component } from "react"
import TemplateResolver from "../../components/TemplateResolver"
import Layout from "../../components/layout"

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
  }

  componentDidMount() {
    const postId = 24017
    const postType = "posts"
    fetch(
      `https://155538-www.web.tornado-node.net/wp-json/wp/v2/${postType}/${postId}/revisions`,
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
  }

  render() {
    const { data, loading, error } = this.state
    if (loading) {
      return <div>Loading preview</div>
    }
    if (error) {
      return <div>{error}</div>
    }
    const page = normalizePageData(data[0])
    return (
      <Layout locale={"nb"}>
        <div className="Preview">
          <p className="Preview__disclaimer">
            This is a preview. Some things might not work entirely as expected.
          </p>
          <div className="Preview__content">
            <TemplateResolver page={page} locale={"nb"} />
          </div>
        </div>
      </Layout>
    )
  }
}
