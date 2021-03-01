import React from 'react';

class RestaurantList extends React.Component {
  renderRestaurants(){
    return this.props.restaurants.map(restaurant => {
      return <li key={restaurant}>{restaurant}</li>
    })
  }

  render() {
    return (
      <div>
        <h4>Restaurant List</h4>
        <ul>{this.renderRestaurants}</ul>
      </div>
    )
  }
}

export default RestaurantList;