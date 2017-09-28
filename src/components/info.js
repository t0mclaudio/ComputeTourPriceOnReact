import React from 'react';

const Info = props => {
  const onChange = event => {
    props.onChange(event)
  }
  return (
      <div className="container">
        <h1>Customer Information</h1>
        <div className="row row1">
          <div id="nameGroup" className="input-group">
            <label htmlFor="name" className="label">Name</label>
            <input type="text" name="name" className="input" value={props.data.name} onChange={onChange} />
          </div>
          <div id="dateGroup" className="input-group">
            <label htmlFor="date" className="label">Date</label>
            <input type="date" name="date" className="input" value={props.data.date} onChange={onChange}  />
          </div>  
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="contactno" className="label">Contact number</label>
            <input type="text" name="contactno" className="input" value={props.data.contactno} onChange={onChange}  />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="label">Email Address</label>
            <input type="text" name="email" className="input" value={props.data.email} onChange={onChange}  />
          </div>  
        </div>
      </div>     
  )
}

export default Info;