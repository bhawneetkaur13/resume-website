import React from 'react'
import PropTypes from 'prop-types'
import './pageHeading.css'

function PageHeading({heading}) {
  return (
    <div className='heading'>
    <h2 className='page-heading'>{heading}</h2>
    </div>
  )
}

PageHeading.propTypes={
    heading: PropTypes.string.isRequired
}
export default PageHeading