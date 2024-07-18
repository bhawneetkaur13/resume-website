import React, {Suspense, lazy} from 'react'
import './profileImage.css'

const AuthorImage =  lazy(()=>import('../../assets/AuthorImage'))

function ProfileImage() {
  return (
    <section className='profile-image-section' aria-label='profile-img-section'>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthorImage/>
      </Suspense>
    </section>
  )
}

export default ProfileImage