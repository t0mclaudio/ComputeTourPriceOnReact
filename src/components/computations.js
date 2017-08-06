import React from 'react';
import CostTable from './costtable.js';

var I_ITEMS = [
  {"item": "Pearl Farm", "price": 3000},
  {"item": "Crocodile Park", "price": 200},
  {"item": "PEC", "price": 100},
  {"item": "Eden", "price": 650}
]

var S_ITEMS = [
  {"item": "Van", "price": 8000},
  {"item": "Tour Guide", "price": 1800}
]

var Computations = React.createClass({
    render() {
        return (
            <div className="container3">  
                <CostTable title="Individual" icon="fa-user" items={I_ITEMS}/> 
                <CostTable title="Shared" icon="fa-users" items={S_ITEMS}/> 
          </div>
        )
    }
})

export default Computations;