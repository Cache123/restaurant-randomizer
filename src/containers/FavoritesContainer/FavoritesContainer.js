import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
// import './FavoritesContainer.css';
import PropTypes from 'prop-types';

export class FavoritesContainer extends Component {
  constructor() {
    super();
  }
  render() {
    const favoriteCards = this.props.favorites.map((restaurants, index) => {
      return <RestaurantCard
        key={index}
        rating={restaurants.data.Rating}
        name={restaurants.name}
        cuisines={restaurants.data.Cuisines}
        addresss={restaurants.data.Address}
      />;
    });
    return (
      <div>
        <div className='favorite-cards'>{favoriteCards}</div>
      </div>
    );
  }
}

export const mapStateToProps = (store) => {
  return {
    favorites: store.favorites
  };
};

export default connect(mapStateToProps, null)(FavoritesContainer);