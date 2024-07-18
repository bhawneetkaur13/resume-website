import React,{lazy, Suspense} from 'react'
import './socialMediaLinks.css'


const FacebookIcon = lazy(() => import('../../assets/FacebookIcon'));
const LinkedInIcon = lazy(() => import('../../assets/LinkedInIcon'));
const GithubIcon = lazy(() => import('../../assets/GithubIcon'));
const MediumIcon = lazy(() => import('../../assets/MediumIcon'));

function ContactMeFooter() {
  return (
    <section className='contact-me-footer'>
    <Suspense fallback={<div>Loading...</div>}>
      <a href='https://www.facebook.com/profile.php?id=100009555601980' target='_blank' rel="noreferrer"><FacebookIcon /></a>
      <a href='https://medium.com/@bhawneetkaur015' target='_blank' rel="noreferrer"><MediumIcon /></a>
      <a href='https://www.linkedin.com/in/bhawneetkaur1309/' target='_blank' rel="noreferrer"><LinkedInIcon/></a>
      <a href='https://github.com/bhawneetkaur13' target='_blank' rel="noreferrer"><GithubIcon/></a>
    </Suspense>
  </section>
  )
}

export default ContactMeFooter