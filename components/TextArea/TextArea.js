import React from 'react'

const TextArea = ({ name, placeholder, label, classes}) => {
  return (
    <div className="form-group">
      <label htmlFor="">{ label }</label>
      <textarea name={name} placeholder={ placeholder } className={ classes }></textarea>
    </div>
  )
}

export default TextArea
