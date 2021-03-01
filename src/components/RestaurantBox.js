import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';

class RestaurantBox extends React.Component {
  state = { term: '' };

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  }

  
  render(){
    console.log(this.state.term);
    return (
      <div>
        <form>
          <h4>Search for your restaurant</h4>
          <input type="text" value={this.state.term} onChange={this.handleChange}/>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(RestaurantBox);