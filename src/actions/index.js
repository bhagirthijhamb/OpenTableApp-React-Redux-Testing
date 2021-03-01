import axios from 'axios';
import { FETCH_RESTAURANTS } from './types';

export function fetchRestaurants(city){
  const response = axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${city}`);

  return {
    type: FETCH_RESTAURANTS,
    payload: response
  }
}