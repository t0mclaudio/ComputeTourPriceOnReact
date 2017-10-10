import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import '../css/App.css';
import '../css/Flexbox.css';
import Info from './info.js';
import Itinerary from './itinerary.js';
import Computations from './computations.js';
import data from './data.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = data
    this.adults = this.state.adults
    this.margin = this.state.margin
    this.tax = this.state.tax
  }
  componentWillMount(){
    this.computeTotals();
  }
  computeTotals(){
    let individual = this.state.individual
    let shared = this.state.shared
    this.itotal = (individual.reduce((total, item)=>({price: total.price+item.price}))).price
    this.stotal = (shared.reduce((total, item)=>({price: total.price+item.price}))).price  
    let cost = this.itotal + (this.stotal/this.adults)
    let costPlusMargin = cost + (cost*(this.margin/100))
    let plusTax = costPlusMargin + (costPlusMargin*(this.tax/100))
    this.total = plusTax
  }
  appendItem(type, obj) {
    let item = {item: obj.target.item.value, price: Number(obj.target.price.value) }
    if (type==="i") {
      let individual = this.state.individual
      individual.push(item) 
      this.setState({individual: individual})
    } else if (type==="s") {
      let shared = this.state.shared
      shared.push(item)  
      this.setState({shared: shared})
    }
    this.computeTotals();
  }
  updateInfoState(event){
    this[event.target.name] = Number(event.target.value)
    let obj = {[event.target.name]: Number(event.target.value)}
    this.setState(obj)
  }
  changeFactor(event){
    this.updateInfoState(event);
    this.computeTotals();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container2">
            <Link to="/information"><i className="fa fa-user" aria-hidden="true"></i> Information</Link>
            <Link to="/computations"><i className="fa fa-calculator" aria-hidden="true"></i> Computations</Link>
            <Link to="/itinerary"><i className="fa fa-list" aria-hidden="true"></i> Itinerary</Link>
            <Link to="/computations"><i className="fa fa-bed" aria-hidden="true"></i> Hotels</Link>
          </div>
          <Route exact path="/information" component={()=>(<Info data={this.state}/>)}/>
          <Route exact path="/computations"
            component={()=> (<Computations data={this.state}
            total={this.total}
            itotal={this.itotal}  
            stotal={this.stotal}
            addNewItem={(type,obj) => this.appendItem(type,obj)}
            factorChange={(event) => this.changeFactor(event)}/>)}
             />
            
          <Route exact path="/itinerary" component={Itinerary}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
