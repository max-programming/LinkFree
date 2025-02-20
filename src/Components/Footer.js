import React, { useState, useEffect } from 'react'

function Footer() {
  const [version, setVersion] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/app.json')
        const data = await response.json()
        setVersion(data.version)
      } catch (error) {
        console.log('Footer useEffect', error)
        alert('An error occurred please try again later.')
      }
    }
    fetchData()
  }, [])

  return (
    <footer className="p-d-flex p-jc-center p-ai-center">
      <p>
        <span className="p-mr-2">Contribute on</span>
        <a
          href="https://github.com/EddieHubCommunity/LinkFree"
          className="p-mr-2"
          aria-label="LinkFree repository on GitHub"
        >
          <i className="pi pi-github" aria-hidden="true"></i>
        </a>
        <span>v{version}</span>
      </p>
    </footer>
  )
}

export default Footer
