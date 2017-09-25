import React from 'react';
import CostTable from './costtable.js';

var Computations = (props) => {
        const onAdd = (type,obj) => props.addNewItem(type,obj)    
        return (
            <div className="container3">  
                <CostTable 
                    title="Individual" 
                    total={props.data.i_total} 
                    icon="fa-user" 
                    items={props.data.individual}
                    onAddItem = {(obj)=>onAdd("i", obj)}/> 

                <CostTable 
                    title="Shared" 
                    total={props.data.s_total} 
                    icon="fa-users" 
                    items={props.data.shared}
                    onAddItem = {(obj)=>onAdd("s", obj)}/>  
          </div>
        )
    }

export default Computations;