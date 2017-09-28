import React from 'react';

const Factor = props => {
    const onChangeValue = event => props.onChange(event)
    return (
        <div style={{margin:10 + 'px'}}>
            <div className="row pax">
                <div className="input-group">
                    <label htmlFor="adults" className="label">Adults</label>
                    <input type="number" name="adults" className="input numPax"  value={props.data.adults} onChange={onChangeValue} />
                </div>
                <div className="input-group">  
                    <label htmlFor="k02" className="label">Kid (0-2 yrs)</label>
                    <input type="number" name="k02" className="input numPax" value={props.data.k02} onChange={onChangeValue}  />
                </div>
                <div className="input-group">  
                    <label htmlFor="k35" className="label">Kid (3-5 yrs)</label>
                    <input type="number" name="k35" className="input numPax" value={props.data.k35} onChange={onChangeValue}  />
                </div>
                <div className="input-group">  
                    <label htmlFor="k61" className="label">Kid (6-11 yrs)</label>
                    <input type="number" name="k61" className="input numPax" value={props.data.k61} onChange={onChangeValue}  />
                </div>
            </div>    
            <div className="row1 pax">
                <div className="input-group">  
                    <label htmlFor="margin" className="label">Margin</label>
                    <input type="number" name="margin" className="input numPax" value={props.data.margin} onChange={onChangeValue}  />
                </div>
                <div className="input-group">  
                    <label htmlFor="tax" className="label">VAT</label>
                    <input type="number" name="tax" className="input numPax" value={props.data.tax} onChange={onChangeValue}  />
                </div>            
            </div>
        </div>
    )
}

export default Factor;