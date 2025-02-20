import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProgressBar } from 'primereact/progressbar'

import Profile from './Profile'
import Links from './Links'
import Milestones from './Milestones'

function Socials() {
  const [showProgress, setShowProgress] = useState(true)
  const { username } = useParams()
  const [profile, setProfile] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/data/${username}.json`)
        const data = await response.json()
        setProfile(data)
        setShowProgress(false)
      } catch (error) {
        console.log('Socials useEffect', error)
        alert('An error occurred please try again later.')
      }
    }
    fetchData()
  }, [username])

  return (
    <main>
      {showProgress && <ProgressBar mode="indeterminate" />}
      {!showProgress && (
        <>
          <Profile
            bio={profile.bio}
            avatar={profile.avatar}
            name={profile.name}
            total={profile.links.length}
          />
          <Links links={profile.links} />
        </>
      )}
      {profile.milestones && <Milestones milestones={profile.milestones} />}
    </main>
  )
}

export default Socials
