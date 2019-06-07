import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const { allMarkdownRemark } = data
  const articles = [];
  for (const edge of allMarkdownRemark.edges) {
    articles.push((
      <a href={edge.node.frontmatter.slug} className="blog-box" key={edge.node.frontmatter.slug}>
        <img src={edge.node.frontmatter.image} alt="" />
        <div className="blog-box-text">
          <h3>{edge.node.frontmatter.title}</h3>
          <p>{edge.node.frontmatter.date}</p>
        </div>
      </a>
    ));
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="jumbotron">
        <div className="jt-text">
          <h2>Gatsby Article</h2>
          <p>June 6, 2019</p>
        </div>
        <div className="jt-img">
          <img src="./images/gatsby-astronaut.png" alt="featured blog" />
        </div>
      </div>
      <div className="wrapper">
        <h1>Hi people</h1>
        <p>Check this shit out!</p>
        <div className="blog-container"> 
          {articles}
        </div>
        <div style={{ maxWidth: `300px`, margin: `1.45rem 0` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Layout>
  );
}

export const query = graphql`
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          image
        }
      }
    }
  }
}
`;

export default IndexPage
