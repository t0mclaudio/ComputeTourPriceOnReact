import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import '../css/App.css';
import '../css/Flexbox.css';
import logo from '../logo.svg';
import Info from './info.js';
import Itinerary from './itinerary.js';
import Computations from './computations.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Info />
          <div className="container2">
            <Link to="/computations"><i className="fa fa-calculator" aria-hidden="true"></i> Computations</Link>
            <Link to="/itinerary"><i className="fa fa-list" aria-hidden="true"></i> Itinerary</Link>
            <Link to="/computations"><i className="fa fa-bed" aria-hidden="true"></i> Hotels</Link>
          </div>
          <Route exact path="/computations" component={Computations}/>
          <Route exact path="/itinerary" component={Itinerary}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
