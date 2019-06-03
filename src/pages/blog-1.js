import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog: Lorem Ipsum" />
    <div class="container">
    <h2 class="title">Lorem Ipsum</h2>
    <p class="blog-body"></p>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
