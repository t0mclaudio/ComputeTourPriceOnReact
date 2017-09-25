import React from 'react';

class AddItem extends React.Component {
  constructor(props){
    super(props);
    this.onItemChange = this.onItemChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {item: "", price:0};
  }
  onItemChange(e){
    this.setState({
      item: e.target.value,
    })
  }
  onPriceChange(e){
    this.setState({
      price: Number(e.target.value)
    })
  }
  onSubmit(e){
    e.preventDefault()
    this.props.onAddItem(this.state)
    this.setState({
      item: "",
      price: 0
    })
  }
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
}

export default AddItem;