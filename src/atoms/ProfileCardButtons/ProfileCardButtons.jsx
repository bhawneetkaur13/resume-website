import React from 'react'
import './profileCardButtons.css'
import Button from '../Button/Button'
import * as labels from '../../utils/labels'
import { useNavigate } from 'react-router-dom'

function ProfileCardButtons() {
    const navigate= useNavigate()
  const openResume=()=>{
    navigate('/resume')
  }
  const openProjects=()=>{
    navigate('/projects')
  }
  return (
    <section
        className="profile-card-buttons"
        aria-label="profile-card-buttons"
      >
        <Button label={labels.RESUME} className="resume-button" onClick={openResume}/>
        <Button label={labels.PROJECTS} className="projects-button" onClick={openProjects}/>
        
      </section>
  )
}

export default ProfileCardButtons