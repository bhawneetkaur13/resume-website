import React from 'react'
import Description from '../../organisms/Description/Description'
import './homePage.css'
import ProfileCard from '../../molecules/ProfileCard/ProfileCard'

function HomePage() {
  return (
    <section className='home-page-section'>
      <section className='author-profile-section'>
        <ProfileCard/>
        </section>
        <Description/>
    </section>
  )
}

export default HomePage