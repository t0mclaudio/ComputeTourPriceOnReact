import React from 'react';

var Info = React.createClass({
  getInitialState() {
    return (
      {
        name: "Tom Claudio",
        adults: 1,
        k02: 0,
        k35: 0,
        k61: 0,
        date: "",
        contactno: "",
        email: "",
      }
    )
  },
  onChange: function(event){
    this.setState({[event.target.name]: event.target.value})
  },
  render() {
    return (
        <div className="container">
          <h1>Customer Information</h1>
          <div className="row row1">
            <div id="nameGroup" className="input-group">
              <label htmlFor="name" className="label">Name</label>
              <input type="text" name="name" className="input" value={this.state.name} onChange={this.onChange} />
            </div>
            <div id="dateGroup" className="input-group">
              <label htmlFor="date" className="label">Date</label>
              <input type="date" name="date" className="input" value={this.state.date} onChange={this.onChange}  />
            </div>  
          </div>
          <div className="row pax">
            <div className="input-group">
              <label htmlFor="adults" className="label">Adults</label>
              <input type="number" name="adults" className="input numPax"  value={this.state.adults} onChange={this.onChange} />
            </div>
            <div className="input-group">  
              <label htmlFor="k02" className="label">Kid (0-2 yrs)</label>
              <input type="number" name="k02" className="input numPax" value={this.state.k02} onChange={this.onChange}  />
            </div>
            <div className="input-group">  
              <label htmlFor="k35" className="label">Kid (3-5 yrs)</label>
              <input type="number" name="k35" className="input numPax" value={this.state.k35} onChange={this.onChange}  />
            </div>
            <div className="input-group">  
              <label htmlFor="k61" className="label">Kid (6-11 yrs)</label>
              <input type="number" name="k61" className="input numPax" value={this.state.k61} onChange={this.onChange}  />
            </div>  
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="contactno" className="label">Contact number</label>
              <input type="text" name="contactno" className="input" value={this.state.contactno} onChange={this.onChange}  />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="label">Email Address</label>
              <input type="text" name="email" className="input" value={this.state.email} onChange={this.onChange}  />
            </div>  
          </div>
        </div>     
    )
  }
})

export default Info;