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
      articleCount: 0,
      visible: 6
    };

    this.loadMore = this.loadMore.bind(this);
  }

  updateArticles() {
    const { allMarkdownRemark } = this.props.data;
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
      if (articles.length === this.state.visible) {
        break;
      }
    }
    this.setState({ articles });
  }

  componentDidMount() {
    this.updateArticles();
    const { allMarkdownRemark } = this.props.data;
    this.setState({ articleCount: allMarkdownRemark.edges.length });
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    }, () => {
      this.updateArticles();
    });
  }
  
  render() {
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
            <h1>Hello World</h1>
            <p>Latest Articles</p>
          </div>
          <div className="blog-container">
            {this.state.articles}
            {this.state.visible < this.state.articleCount &&
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
