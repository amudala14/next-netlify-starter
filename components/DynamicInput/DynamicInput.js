import React from 'react'

const DynamicInput = ({labelName, inputName, removeThisField}) => {
  return (
    <>
      <input type="text" name={ labelName } placeholder="Type field title..." className="hidden-input-border hidden-input"/>
      <input
        name={inputName}
        placeholder="eg: Rwanda"
        type="text"
        className="form-control"
      />
      <span onClick={ removeThisField } className="color-primary removeField">Remove field</span>
    </>
  )
}

export default DynamicInput
