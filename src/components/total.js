import React from 'react';
import Currency from 'currency-formatter';

var Total = props => {
    let total = Currency.format(props.total, {code: 'PHP'});
    return (
        <div className="row">
            <p>{props.text}: {total}</p>
        </div>    
    )
}

export default Total;