import React from 'react';
import Currency from 'currency-formatter';

var Total = props => {
    let total = Currency.format(props.total, {code: 'PHP'});
    return (
        <div className="">
            <h2>Total: {total}</h2>
        </div>    
    )
}

export default Total;