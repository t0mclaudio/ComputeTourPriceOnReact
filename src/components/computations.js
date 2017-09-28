import React from 'react';
import CostTable from './costtable.js';
import Total from './total.js';
import Factor from './factor';

var Computations = (props) => {
        const onAdd = (type,obj) => props.addNewItem(type,obj)  
        const onFactorChange = event => props.factorChange(event) 
        return (
            <div className="container3">
                <Factor onChange={(event)=>onFactorChange(event)} data={props.data} />  
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
                <Total total={props.data.total} />      
          </div>
        )
    }

export default Computations;