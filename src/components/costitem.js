import React from 'react';

var CostItem = (props) => {
  return (
    <tr>
      <td>{props.item}</td>
      <td className="alignright">{props.price}</td>
    </tr>
  )
}

export default CostItem;