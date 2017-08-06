import React from 'react';

var CostTotal = function(props){
  var total = 0;
  props.items.map(function(item){
    console.log(item.price)
    total = total + item.price
    console.log(total)
  })  
  return (
    <tr>
      <td className="total">Total: </td>
      <td className="total alignright">{total}</td>
    </tr>    
  )
}

CostTotal.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      item: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired
    })).isRequired 
}

export default CostTotal;