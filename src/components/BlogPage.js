import React from "react"
import { Html } from "./utils/"
import NewsCard from "./NewsCard"

const BlogPage = ({ posts, page }) => {
  const { title, content } = page
  // console.log(props)
  // return <div>de</div>
  return (
    <article className="BlogPage">
      <header className="BlogPage__header">
        <h1 className="BlogPage__title">
          <Html content={title} />
        </h1>
        <div className="BlogPage__intro">
          <Html content={content} />
        </div>
      </header>
      <div className="BlogPage__content">
        <div className="NewsCards">
          {posts.map((post, i) => (
            <NewsCard key={`NewsCard-${post.wordpress_id}`} post={post} i={i} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default BlogPage

// import React, { Component } from 'react'
// import { FormattedMessage } from 'react-intl'
// import { NavLink } from 'react-router-dom'

// import NewsCard from '../NewsCard'
// import YearSelect from '../YearSelect'
// import PostLoadButton from '../PostLoadButton'
// import { Loader, Html } from '../utils'
// import Message from '../Message'

// export default class BlogPage extends Component {
//   render() {
//     const {
//       title,
//       content,
//       posts,
//       loading,
//       categories,
//       page,
//       totalPages
//     } = this.props
//     return (
// <article className="BlogPage">
//   <header className="BlogPage__header">
//     <h1 className="BlogPage__title">
//       <Html content={title.rendered} />
//     </h1>
//     <div className="BlogPage__intro">
//       <Html content={content.rendered} />
//     </div>
//     <div className="BlogPage__nav">
//       {categories && (
//         <ul className="PostCategoryNav">
//           <li className="PostCategoryNav__item">
//             <NavLink
//               className="PostCategoryNav__link"
//               activeClassName="PostCategoryNav__link--active"
//               to={this.props.link + this.props.location.search}
//             >
//               <FormattedMessage
//                 id="categories.all"
//                 defaultMessage="All"
//               />
//             </NavLink>
//           </li>
//           {categories.map(category => {
//             return (
//               <li
//                 className="PostCategoryNav__item"
//                 key={`CategoryNavItem-${category.id}`}
//               >
//                 <NavLink
//                   className="PostCategoryNav__link"
//                   activeClassName="PostCategoryNav__link--active"
//                   to={category.link + this.props.location.search}
//                 >
//                   {category.name}
//                 </NavLink>
//               </li>
//             )
//           })}
//           <li className="PostCategoryNav__item">
//             <YearSelect />
//           </li>
//         </ul>
//       )}
//     </div>
//   </header>
//   {posts.length > 0 ? (
//     <div className="BlogPage__content">
//       <div className="NewsCards">
//         {posts.map((post, i) => (
//           <NewsCard key={`NewsCard-${post.id}`} post={post} i={i} />
//         ))}
//       </div>
//       {/* <p>
//         {page}/{totalPages}
//       </p> */}
//       {totalPages && totalPages > 1 && page < totalPages ? (
//         <PostLoadButton
//           loadMore={this.props.loadMore}
//           loading={loading}
//         />
//       ) : (
//         <Message>
//           <FormattedMessage
//             id="blog.allpostsloaded"
//             defaultMessage="All posts loaded"
//           />
//         </Message>
//       )}
//     </div>
//   ) : (
//     <div className="BlogPage__content">
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="BlogPage__noresult">
//           <FormattedMessage
//             id="blog.noresult"
//             defaultMessage="Could not find any posts for the current query"
//           />
//         </div>
//       )}
//     </div>
//   )}
//   <div />
// </article>
//     )
//   }
// }
