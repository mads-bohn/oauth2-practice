import React from 'react'

export default function Home() {

    const openGoogle = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google'
    }

    const openGithub = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github'
    }

  return (
    <div>
        <h1>OAuth2 Login</h1>
        <button onClick={openGoogle}>Login with Google</button>
        <button onClick={openGithub}>Login with Github</button>
    </div>
  )
}
