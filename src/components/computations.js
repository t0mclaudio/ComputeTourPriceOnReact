import React from 'react';
import CostTable from './costtable.js';

var Computations = (props) => {
        const onAdd = obj => props.addNewItem(obj)    
        return (
            <div className="container3">  
                <CostTable 
                    title="Individual" 
                    total={props.data.i_total} 
                    icon="fa-user" 
                    items={props.data.individual}
                    onAddItem = {(obj)=>onAdd(obj)}/> 

                <CostTable 
                    title="Shared" 
                    total={props.data.s_total} 
                    icon="fa-users" 
                    items={props.data.shared}/> 
          </div>
        )
    }

export default Computations;