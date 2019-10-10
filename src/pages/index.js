import React from 'react'
import SEO from '../components/seo'
import '../styles/index.scss'

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <div
      className="main"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="spotify-btn-wrapper">
        <a
          className="spotify-link"
          href="https://accounts.spotify.com/authorize/?client_id=86c6900a7af54b00b146a8beff78c52d&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fdubolt.com/callback&amp;scope=streaming%20user-top-read%20user-read-private%20playlist-modify-public%20playlist-modify-private%20user-read-playback-state%20user-modify-playback-state%20user-read-birthdate%20user-read-email"
        >
          <img
            alt="Spotify"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U3BvdGlmeV9JY29uX1JHQl9HcmVlbjwvdGl0bGU+PHBhdGggZD0iTTE1LjU4OCA5LjA5NEMxMi40MyA3LjIyIDcuMjIzIDcuMDQ3IDQuMjA4IDcuOTZjLS40ODMuMTQ4LS45OTQtLjEyNS0xLjE0LS42MS0uMTQ4LS40ODMuMTI1LS45OTUuNjEtMS4xNDIgMy40Ni0xLjA1IDkuMjEtLjg0NyAxMi44NDUgMS4zMS40MzYuMjYuNTguODIuMzIgMS4yNTYtLjI1OC40MzUtLjgyLjU4LTEuMjU1LjMyem0tLjEwMyAyLjc3N2MtLjIyMi4zNi0uNjkyLjQ3My0xLjA1LjI1My0yLjYzMy0xLjYxOC02LjY0Ni0yLjA4Ny05Ljc2LTEuMTQyLS40MDQuMTIzLS44My0uMTA0LS45NTMtLjUwOC0uMTIyLS40MDMuMTA2LS44My41MS0uOTUyIDMuNTU2LTEuMDggNy45OC0uNTU3IDExLjAwMiAxLjMuMzYuMjIyLjQ3Mi42OTMuMjUgMS4wNXptLTEuMiAyLjY2OGMtLjE3NS4yOS0uNTUuMzgtLjgzOC4yMDMtMi4zLTEuNDA0LTUuMTk1LTEuNzIyLTguNjA0LS45NDMtLjMzLjA3NS0uNjU2LS4xMy0uNzMtLjQ2LS4wNzctLjMyOC4xMy0uNjU1LjQ1OC0uNzMgMy43MzItLjg1MyA2LjkzMi0uNDg2IDkuNTE0IDEuMDkyLjI4OC4xNzQuMzc4LjU1LjIwMi44Mzh6TTkuNzk2LjQxQzQuMzg1LjQxIDAgNC43OTcgMCAxMC4yMDYgMCAxNS42MTUgNC4zODUgMjAgOS43OTUgMjBzOS43OTQtNC4zODUgOS43OTQtOS43OTVTMTUuMjAzLjQxIDkuNzk0LjQxeiIgZmlsbD0iIzREQjA1QiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
            className="spotify-logo"
          />
          <span class="">Connect to Spotify</span>
        </a>
      </div>
    </div>
  </div>
)

export default IndexPage
