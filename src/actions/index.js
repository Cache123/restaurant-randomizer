import { getNearbyRestaurants, postCurrentLocation } from '../helper/apiCalls/apiCalls';

export const addEventName = (name, id) => ({
  type: 'ADD_EVENT_NAME',
  name,
  id
});

export const postLocation = () => async (dispatch) => {
  const currentLocation = await postCurrentLocation();
  dispatch(fetchLocationSuccess(currentLocation));
  dispatch(getRestaurants(currentLocation.lat, currentLocation.lng));
};

export const fetchLocationSuccess = (location) => ({
  type: 'FETCH_LOCATION_SUCCESS',
  location
});

export const getRestaurants = (lat, lng) => async (dispatch) => {
  const nearbyRestaurants = await getNearbyRestaurants(lat, lng);
  dispatch(makeRestaurantArray(nearbyRestaurants));
};

export const makeRestaurantArray = (restaurants) => ({
  type: 'MAKE_RESTAURANT_ARRAY',
  restaurants
});

export const addFavorite = (favorites) => ({
  type: "ADD_FAVORITE",
  favorites
});

export const deleteFavorite = (favorites) => ({
  type: "DELETE_FAVORITE",
  favorites
});
