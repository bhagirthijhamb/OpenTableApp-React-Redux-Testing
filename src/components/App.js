import React from 'react';
import './../App.scss';
import { Route, Link } from 'react-router-dom';
import RestaurantBox from './RestaurantBox';
import RestaurantList from './RestaurantList';

class App extends React.Component {
  renderHeader(){
    return (
      <div className="navBar">
        <Link to="/">Restaurants on Demand</Link>
        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Find Restaurants</Link></li>
        </ul>
      </div>
      
    )
  }
 render(){
    return (
      <div className="wrapper">
        {this.renderHeader()}
        <Route path="/" exact component={RestaurantList} />
        <Route path="/restaurants" component={RestaurantBox} />
      </div>
    )
  }
 }

export default App;

