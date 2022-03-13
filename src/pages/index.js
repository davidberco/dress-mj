import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {/* Hero Image */}
      <figure className="kg-card kg-image-card kg-width-full">
        <Img fluid={data.dress0.childImageSharp.fluid} className="kg-image" />
        <figcaption>Fotografía real sin retoques.</figcaption>
      </figure>
      {/* End Hero Image */}
      <div className="post-content-body">
        <blockquote>
          Dos vestidos en uno. Información relacionada con el estilo de una
          parte del vestido y la otra. Diferencias y caracateristicas quer
          evocan cada estilo. Mirar los fotos.
        </blockquote>
      </div>

      {/* Hero Image 2 */}
      <figure className="kg-card kg-image-card kg-width-full">
        <Img fluid={data.dress1.childImageSharp.fluid} className="kg-image" />
        <figcaption>
          Dos estilos en uno. Fotografía real sin retoques.
        </figcaption>
      </figure>
      {/* End Hero Image 2 */}

      <div className="post-content-body">
        <h2>Explora una prenda de original diseño</h2>
        <h5>Explora una prenda de original diseño</h5>
        <p>
          Un vestido de bodas diseñado por Angélica Novias. En perfecto estado
          (1 día de uso), añadimos 3 accessorios (tiara, accesorio1, accesorio2)
          sin costo adicional al comprar el vestido.
        </p>
      </div>

      <figure className="kg-card kg-image-card kg-width-full">
        <Img fluid={data.dress2.childImageSharp.fluid} className="kg-image" />
        <figcaption>
          Dos estilos en uno. Fotografía real sin retoques.
        </figcaption>
      </figure>
      <figure className="kg-card kg-image-card kg-width-full">
        <Img fluid={data.dress3.childImageSharp.fluid} className="kg-image" />
        <figcaption>
          Dos estilos en uno. Fotografía real sin retoques.
        </figcaption>
      </figure>

      {/* {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )} */}

      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    dress0: file(relativePath: { eq: "dress-23edit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dress1: file(relativePath: { eq: "dress-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dress2: file(relativePath: { eq: "dress-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    dress3: file(relativePath: { eq: "dress-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
