import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import jtImg from '../images/astronaut.png'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      visible: 6
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }
  render() {
    const { allMarkdownRemark } = this.props.data

    for (const edge of allMarkdownRemark.edges) {
      this.state.articles.push((
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
            {this.state.articles}
            {this.state.visible < this.state.articles.length &&
            <button onClick={this.loadMore} type="button" className="load-more">Load More</button> }
          </div>
        </div>
      </Layout>
    );
  }
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
