import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import SEO from '../components/seo'
import '../styles/index.scss'
import SpotifyBtn from '../components/SpotifyBtn'

const IndexPage = props => (
  <div>
    <SEO title="Home" />
    {/* lazy load home page */}
    <BackgroundImage
      fluid={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid}
    >
      <Container fluid>
        <Row>
          <Col sm={12} lg={12}>
            <div className="d-flex justify-center align-center main text-center">
              <div className="flex-column align-center justify-center">
                <Row>
                  <Col lg={2}></Col>
                  <Col>
                    <h3 className="text-white font-semibold">Melodify</h3>
                    <h1 className="font-black text-white">
                      You are what you listen to
                    </h1>
                    <h5 className="text-white font-semibold">
                      We're here to help you discover those amazing sets of
                      playlists! Those songs you've been playing over the time
                      are going to be used for creating these playlists. We
                      analize your music habits, what songs you play the most,
                      which artist are you listen to all the time and based on
                      that data we create amazing playlists to melodify your
                      soul!!
                    </h5>
                  </Col>
                  <Col lg={2}></Col>
                </Row>
                <SpotifyBtn />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: { page: { eq: "home" } }) {
      frontmatter {
        header
        image {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
