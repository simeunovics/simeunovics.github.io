import React from 'react'
import Link from 'gatsby-link'

const PostLink = ({ post }) => (
  <div style={{marginBottom: 15}}>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} <i>({post.frontmatter.date})</i>
    </Link>
  </div>
)

export default PostLink
