import React from 'react';

const AddItem = props => {
  const onAddItem = event =>{
    event.preventDefault();
    props.onAddItem(event)
  }
  return (
    <tr>
      <td colSpan={2}>
        <div className="footer-control">
          <form onSubmit={onAddItem}>
            <input name="item" type="text" placeholder="Item" />
            <input name="price" type="number" placeholder="Price" />
            <input type="submit" value="Add" />
          </form>
        </div>  
      </td>
    </tr>    
  )
}

export default AddItem;