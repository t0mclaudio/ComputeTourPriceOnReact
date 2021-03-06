import React from 'react';
import AddItem from './additem.js';
import CostItem from './costitem.js';
import Currency from 'currency-formatter';

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
        {props.items.map(function(item, index){
          return (
            <CostItem 
              item={item.item} 
              price={item.price} 
              key={index}/>
          )
        })}
        
      </tbody>
      <tfoot className="tfoot">
        <tr>
          <td className="total">Total: </td>
          <td className="total alignright">{Currency.format(props.total, {code:'PHP'})}</td>
        </tr>
        { props.sharing ?
        <tr>
          <td className="total">Sharing: </td>
          <td className="total alignright">{Currency.format(props.sharing, {code:'PHP'})}</td>
        </tr> 
        :
        null}
        <AddItem onAddItem={(obj)=>onAdd(obj)} />
      </tfoot>
    </table>
  )
}

export default CostTable;