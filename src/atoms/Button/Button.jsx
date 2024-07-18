import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

function Button({label, onClick, className}) {
  return (
    <button onClick={onClick} className={className} aria-label='button'>{label}</button>
  )
}

Button.propTypes ={
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}
export default Button