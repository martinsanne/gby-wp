import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl =
    index - 1 === 1 ? "/posts/" : "/posts/" + (index - 1).toString()
  const nextUrl = "/posts/" + (index + 1).toString()
  return (
    <Layout>
      <h4>Page {index + "/" + pageCount}</h4>
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
      {group.map(({ node }) => (
        <div key={node.id} className="blogListing">
          <div className="date">{node.date}</div>
          <Link className="blogUrl" to={node.link}>
            <h3
              style={{ marginBottom: 0 }}
              dangerouslySetInnerHTML={{ __html: node.title }}
            />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </Layout>
  )
}
export default IndexPage
