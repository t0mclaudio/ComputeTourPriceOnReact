import React from 'react';

var AddItem = React.createClass({
  propTypes:{
      item: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired
  },
  getInitialState(){
    return {
      item: "",
      price: 0
    }
  },
  onItemChange(e){
    console.log(e.target.value)
    this.setState({
      item: e.target.value,
    })
  },
  onPriceChange(e){
    console.log(e.target.value)
    this.setState({
      price: Number(e.target.value)
    })
  },  
  onSubmit(e){
    e.preventDefault()
    this.props.onAdd({
      item: this.state.item,
      price: this.state.price
    })
    this.setState({
      item: "",
      price: ""
    })
  },
  render(){
    return (
      <tr>
        <td colSpan={2}>
          <div className="footer-control">
            <form onSubmit={this.onSubmit}>
              <input name="item" type="text" placeholder="Item" value={this.state.item} onChange={this.onItemChange} />
              <input name="price" type="number" placeholder="Price" value={this.state.price} onChange={this.onPriceChange}  />
              <input type="submit" value="Add" />
            </form>
          </div>  
        </td>
      </tr>    
    )
  }
})

export default AddItem;