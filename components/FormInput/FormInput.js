import React from 'react'

const Input = ({ name, type, placeholder, label, classes}) => {
  return (
    <div className="form-group">
      <label htmlFor="">{ label }</label>
      <input type={type} name={name} placeholder={ placeholder } className={ classes }/>
    </div>
  )
}

export default Input
