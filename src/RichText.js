import React from 'react'
import ReactMCE from './ReactMCE'

const RichText = (props) => {
  if (typeof window === 'undefined') return null

  return <ReactMCE {...props} />
}

export default RichText
