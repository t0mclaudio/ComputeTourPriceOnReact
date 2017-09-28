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
  }
  componentWillMount(){
    this.computeTotals();
  }
  computeTotals(){
    let individual = this.state.individual
    let shared = this.state.shared
    let itotal = individual.reduce((total, item)=>({price: total.price+item.price}))
    let stotal = shared.reduce((total, item)=>({price: total.price+item.price}))    
    this.setState(
      { 
        i_total:itotal.price,
        s_total:stotal.price
      }
    )
    this.setState((prevState, props)=>({
      total: prevState.i_total + (prevState.s_total/prevState.adults)
    }))     
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
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Info data={this.state} onChange={(event) => this.updateInfoState(event)} />
          <div className="container2">
            <Link to="/computations"><i className="fa fa-calculator" aria-hidden="true"></i> Computations</Link>
            <Link to="/itinerary"><i className="fa fa-list" aria-hidden="true"></i> Itinerary</Link>
            <Link to="/computations"><i className="fa fa-bed" aria-hidden="true"></i> Hotels</Link>
          </div>
          <Route exact path="/computations" 
            component={()=> (<Computations data={this.state} 
            addNewItem={(type,obj) => this.appendItem(type,obj)}/>)} />
            
          <Route exact path="/itinerary" component={Itinerary}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
