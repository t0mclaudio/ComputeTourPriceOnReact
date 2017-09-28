import React from 'react';

const Factor = props => {
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
    <div className="input-group">  
      <label htmlFor="margin" className="label">Margin</label>
      <input type="number" name="margin" className="input numPax" value={props.data.margin} onChange={onChange}  />
    </div>
    <div className="input-group">  
      <label htmlFor="tax" className="label">VAT</label>
      <input type="number" name="tax" className="input numPax" value={props.data.tax} onChange={onChange}  />
    </div>              
  </div>
}

export default Factor;