import React from 'react'

const FormSelect = ({ name, label, classes, selectOptions}) => {
  return (
    <div className="form-group">
      <label htmlFor="">{ label }</label>
      <select name={name} className={classes}>
        {
          selectOptions.map((el, i) => (
            <option key={ i } value={el.value} >{ el.title }</option>
          ))
        }
      </select>
    </div>
  )
}

export default FormSelect
