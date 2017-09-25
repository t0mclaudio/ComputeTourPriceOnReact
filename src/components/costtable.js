import React from 'react';
import AddItem from './additem.js';
import CostItem from './costitem.js';

var CostTable = (props) => {
  // Function to make obj to CostTable Surface
  const onAdd = obj => props.onAddItem(obj) //No paranthesis and curly because of single parameter
  
  return(
    <table>
      <thead className="thead">
        <tr>
          <td colSpan={2} className="table-title">
            <i className={`fa ${ props.icon }`} aria-hidden="true"></i> 
            {props.title}
          </td>
        </tr>
        <tr>
          <td>Item</td><td className="center-align">Price</td>
        </tr>          
      </thead>
      <tbody className="tbody">
        {props.items.map(function(item){
          return (
            <CostItem 
              item={item.item} 
              price={item.price} />
          )
        })}
        
      </tbody>
      <tfoot className="tfoot">
        <tr>
          <td className="total">Total: </td>
          <td className="total alignright">{props.total}</td>
        </tr>   
        <AddItem onAddItem={(obj)=>onAdd(obj)} />
      </tfoot>
    </table>
  )
}

export default CostTable;