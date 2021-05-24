import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: {value, measurementUnit}, image } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${value} ${measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
