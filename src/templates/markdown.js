import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    // <div className="blog-post-container">
    //   <div className="blog-post">
    //     <h1>{frontmatter.title}</h1>
    //     {/* <h2>{frontmatter.date}</h2> */}
    //     <div
    //       className="blog-post-content"
    //       dangerouslySetInnerHTML={{ __html: html }}
    //     />
    //   </div>
    // </div>
    <article>
      <header>
        <h3>{frontmatter.title}</h3>
      </header>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
