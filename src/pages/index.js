import React from "react"

import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
      className="masthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
      fadeIn
    >
      <div className="black-overlay">
        <div className="content-box">
          <h1>This is where my h1 tag goes</h1>
          <h2>This is my sub head</h2>
        </div>
      </div>
    </BackgroundImage>
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "rarotonga.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;