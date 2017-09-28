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
        <div className="row pax">
          <div className="input-group">
            <label htmlFor="adults" className="label">Adults</label>
            <input type="number" name="adults" className="input numPax"  value={props.data.adults} onChange={onChange} />
          </div>
          <div className="input-group">  
            <label htmlFor="k02" className="label">Kid (0-2 yrs)</label>
            <input type="number" name="k02" className="input numPax" value={props.data.k02} onChange={onChange}  />
          </div>
          <div className="input-group">  
            <label htmlFor="k35" className="label">Kid (3-5 yrs)</label>
            <input type="number" name="k35" className="input numPax" value={props.data.k35} onChange={onChange}  />
          </div>
          <div className="input-group">  
            <label htmlFor="k61" className="label">Kid (6-11 yrs)</label>
            <input type="number" name="k61" className="input numPax" value={props.data.k61} onChange={onChange}  />
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