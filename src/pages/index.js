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
        <Col sm={12} lg={12}>
          <div className="d-flex justify-center align-center h-100 main text-center">
            <div className="flex-column align-center justify-center">
              <Row>
                <Col lg={2}></Col>
                <Col>
                  <h3 className="text-white font-semibold">Melodify</h3>
                  <h1 className="font-black text-white">
                    You are what you listen to
                  </h1>
                  <h5 className="text-white font-semibold">
                    We're here to help you create an amazing set of playlists!
                    Those songs you played over the time are going to be used
                    for creating these playlists. We analize your music habits,
                    what songs you play the most, which artist are you listen to
                    all the time and bassed on that data we create amazing
                    playlists to melodify your soul!
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
  </div>
)

export default IndexPage
