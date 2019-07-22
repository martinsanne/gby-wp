import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import BlogPage from "./BlogPage"

const BlogPageContainer = ({ page, ...props }) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allWordpressPost(limit: 24, filter: { locale: { eq: "nb" } }) {
  //       edges {
  //         node {
  //           title
  //           link
  //           wordpress_id
  //           excerpt
  //           date
  //           featured_image {
  //             title
  //             filename
  //             filesize
  //             url
  //             link
  //             alt
  //             author
  //             description
  //             caption
  //             name
  //             status
  //             uploaded_to
  //             date
  //             modified
  //             menu_order
  //             mime_type
  //             type
  //             subtype
  //             icon
  //             width
  //             height
  //             sizes {
  //               thumbnail
  //               thumbnail_width
  //               thumbnail_height
  //               medium
  //               medium_width
  //               medium_height
  //               medium_large
  //               medium_large_width
  //               medium_large_height
  //               large
  //               large_width
  //               large_height
  //               small
  //               small_width
  //               small_height
  //               medium_small
  //               medium_small_width
  //               medium_small_height
  //               xlarge
  //               xlarge_width
  //               xlarge_height
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // let posts = data.allWordpressPost.edges.map(item => item.node)
  // if (props.latestPosts) {
  //   posts = props.latestPosts
  // }

  const posts = props.latestPosts

  return <BlogPage {...props} posts={posts} page={page} />
}

export default BlogPageContainer

// import React, { Component } from 'react'
// import BlogPage from '../components/pages/BlogPage'
// import { ContentProvider } from '../services/wp'
// import { getSelectedYear } from '../utils/functions'

// const getArrayItemByValue = (array, key, value) => {
//   return array.filter(item => {
//     return item[key] === value
//   })[0]
// }

// class BlogPageContainer extends Component {
//   state = {
//     posts: [],
//     loading: true,
//     page: 0,
//     categories: [],
//     year: false,
//     paging: false
//   }

//   getYear = () => {
//     return getSelectedYear(this.props.location.search)
//   }

//   fetchPosts = () => {
//     // We need the full category objects to get posts from current categories
//     ContentProvider.getCategories().then(categories => {
//       if (!this.state.categories.length) {
//         this.setState({ categories })
//       }

//       // Get current cat
//       let curCatId = false
//       if (this.props.match.params.cat) {
//         const cat = getArrayItemByValue(
//           categories,
//           'slug',
//           this.props.match.params.cat
//         )
//         if (cat && cat.id) {
//           curCatId = cat.id
//         }
//       }

//       const nextPage = this.state.page + 1

//       // Get posts
//       ContentProvider.getPosts({
//         year: this.state.year,
//         page: nextPage,
//         categories: curCatId
//       })
//         .then(posts => {
//           this.setState(prevState => ({
//             posts: [...prevState.posts, ...posts],
//             loading: false,
//             paging: posts._paging,
//             page: nextPage
//           }))
//         })
//         .catch(err => console.log(err))
//     })
//   }

//   loadMore = () => {
//     this.setState({ loading: true }, this.fetchPosts)
//   }

//   componentDidMount = () => {
//     const year = this.getYear()
//     this.setState({ year }, this.fetchPosts)
//   }

//   componentDidUpdate = (prevProps, prevState) => {
//     const year = this.getYear()
//     if (this.props.location.search !== prevProps.location.search) {
//       if (year !== this.state.year) {
//         this.setState(
//           { year, posts: [], page: 0, loading: true },
//           this.fetchPosts
//         )
//       }
//     } else if (this.props.location.pathname !== prevProps.location.pathname) {
//       if (
//         this.props.match.params.cat &&
//         this.props.match.params.cat !== prevProps.match.params.cat
//       ) {
//         this.setState(
//           { year, posts: [], page: 0, loading: true },
//           this.fetchPosts
//         )
//       } else {
//         this.fetchPosts()
//       }
//     }
//   }

//   render() {
//     const { loading, posts, categories, paging, page } = this.state
//     return (
//       <div>
//         <BlogPage
//           {...this.props}
//           posts={posts}
//           loading={loading}
//           loadMore={this.loadMore}
//           categories={categories}
//           page={page}
//           totalPages={paging.totalPages || null}
//         />
//       </div>
//     )
//   }
// }

// export default BlogPageContainer
