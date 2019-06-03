import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Check this shit out!</p>
    <div class="blog-container"> 
        <a href="/blog-1/" class="blog-box">
          <img src="https://images.unsplash.com/photo-1559311745-a57f6233488e?auto=format&fit=crop&w=800&h=600" alt="blog-image" />
          <div class="blog-box-text">
            <h3>Lorem Ipsum</h3>
            <p>May 31, 2019</p>
          </div>
        </a>

        <a href="#" class="blog-box">
          <img src="https://images.unsplash.com/photo-1559250543-36c18ccff71d?auto=format&fit=crop&w=800&h=600" alt="blog-image" />
          <div class="blog-box-text">
            <h3>Lorem Ipsum</h3>
            <p>May 31, 2019</p>
          </div>
        </a>

        <a href="#" class="blog-box">
          <img src="https://images.unsplash.com/photo-1559211227-36c5282ae4d1?auto=format&fit=crop&w=800&h=600" alt="blog-image" />
          <div class="blog-box-text">
            <h3>Lorem Ipsum</h3>
            <p>May 31, 2019</p>
          </div>
        </a>
      
        <a href="#" class="blog-box">
          <img src="https://images.unsplash.com/photo-1559163304-2bd8f8600164?auto=format&fit=crop&w=800&h=600" alt="blog-image" />
          <div class="blog-box-text">
            <h3>Lorem Ipsum</h3>
            <p>May 31, 2019</p>
          </div>
        </a>

        <a href="#" class="blog-box">
          <img src="https://images.unsplash.com/photo-1559251333-cf8a2d868744?auto=format&fit=crop&w=800&h=600" alt="blog-image" />
          <div class="blog-box-text">
            <h3>Lorem Ipsum</h3>
            <p>May 31, 2019</p>
          </div>
        </a>

        <a href="#" class="blog-box">
          <img src="https://images.unsplash.com/photo-1559280109-6992ccfa4d37?auto=format&fit=crop&w=800&h=600" alt="blog-image" />
          <div class="blog-box-text">
            <h3>Lorem Ipsum</h3>
            <p>May 31, 2019</p>
          </div>
        </a>
    </div>
    <div style={{ maxWidth: `300px`, margin: `1.45rem 0` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
