import React from 'react';
import AddItem from './additem.js';
import CostItem from './costitem.js';
import CostTotal from './costtotal.js';

var CostTable = React.createClass({
  getInitialState() {
    return (
      {
        items: this.props.items
      }
    )
  },
  onAddItem(item) {
    this.state.items.push(item)
    this.setState(this.state);
  },
  render(){
    return(
      <table>
        <thead className="thead">
          <tr>
            <td colSpan={2} className="table-title">
              <i className={`fa ${ this.props.icon }`} aria-hidden="true"></i> 
              {this.props.title}
            </td>
          </tr>
          <tr>
            <td>Item</td><td className="center-align">Price</td>
          </tr>          
        </thead>
        <tbody className="tbody">
          {this.state.items.map(function(item){
            return (
              <CostItem 
                item={item.item} 
                price={item.price} />
            )
          })}
          
        </tbody>
        <tfoot className="tfoot">
          <CostTotal items={this.state.items} />
          <AddItem onAdd={this.onAddItem} />
        </tfoot>
      </table>
    )
  }
})

export default CostTable;