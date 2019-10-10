import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import SEO from '../components/seo'
import '../styles/index.scss'
import SpotifyBtn from '../components/SpotifyBtn'

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-center align-center h-100 main text-center">
            <div className="flex-column align-center justify-center">
              <h5 className="text-white">
                Love great music? We do too. Introducing
              </h5>
              <h1 className="font-black text-white">Melodify</h1>
              <SpotifyBtn />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default IndexPage
