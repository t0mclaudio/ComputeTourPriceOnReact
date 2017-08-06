import React from 'react';

var Itinerary = React.createClass({
    render(){
        return (
            <div className="container">
                <h2>Itinerary</h2>
                <textarea id="itinerary" type="text" name="itinerary" />
            </div>
        )
    }
});

export default Itinerary;