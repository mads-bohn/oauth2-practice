import React from 'react'
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Home() {

    const openGoogle = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google'
    }

    const openGithub = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github'
    }

    const buttonStyle = {
      fontSize: "20px",
      padding: "10px"
    }

  return (
    <div>
        <h1>OAuth2 Login</h1>
        <button onClick={openGoogle} style={buttonStyle}><FaGoogle />Login with Google</button>
        <br />
        <button onClick={openGithub} style={buttonStyle}><FaGithub />Login with Github</button>
    </div>
  )
}
