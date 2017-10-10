import React from 'react';
import CostTable from './costtable.js';
import Total from './total.js';
import Factor from './factor';

var Computations = (props) => {
        const onAdd = (type,obj) => props.addNewItem(type,obj)  
        const onFactorChange = event => props.factorChange(event) 
        return (   
            <div className="container3">
                <Factor onChange={(event)=>onFactorChange(event)} 
                    data={props.data} />  

                <CostTable 
                    title="Individual" 
                    total={props.itotal} 
                    icon="fa-user"
                    items={props.data.individual}
                    onAddItem = {(obj)=>onAdd("i", obj)} /> 

                <CostTable 
                    title="Shared" 
                    total={props.stotal} 
                    icon="fa-users" 
                    items={props.data.shared}
                    sharing={props.sharing}
                    onAddItem = {(obj)=>onAdd("s", obj)} />
                <div>        
                    <Total text="Total Cost" total={props.cost} />
                    <Total text="Individual Price(Before tax)" total={props.price} />
                    <Total text="Individual Price(After tax)" total={props.aftertax} />
                    <Total text="Grand Total" total={props.total} />    
                </div>
            </div> 
        )
    }

export default Computations;