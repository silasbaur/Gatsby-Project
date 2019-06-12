import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import jtImg from '../images/astronaut.png'

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
          <a href="">
            <h2>Gatsby Article</h2>
            <p>June 6, 2019</p>
          </a>
        </div>
        <img className="jt-img" src={jtImg} alt="featured blog image" />
        
      </div>
      <div className="wrapper">
        <div className="welcome-box">
          <h1>Hi people</h1>
          <p>Check this shit out!</p>
        </div>
        <div className="blog-container"> 
          {articles}
        </div>
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
