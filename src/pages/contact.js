import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Contáctanos</h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.dress.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Nota acerca de la foto</figcaption>
          </figure> */}
          <p>Envíanos un mensaje usando este form.</p>

          {/* contact form */}
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" placeholder="Nombre" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="col-6 col-12-small">
                <input type="checkbox" id="demo-human" name="demo-human" />
                <label htmlFor="demo-human">No soy un robot</label>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Tu mensaje aquí..."
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    {/* note: "borrar" is added chaging the attribute from defaultvalue to value.. check this on netlify */}
                    <input type="reset" value="borrar" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
          {/* contact form ends */}
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    dress: file(
      relativePath: { eq: "charisse-kenion-ZSc5c42YNPE-unsplash.jpg" }
    ) {
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
