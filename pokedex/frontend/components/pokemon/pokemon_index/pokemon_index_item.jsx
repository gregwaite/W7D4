import React from 'react';
import { Link } from 'react-router-dom';

export default ({pokemon}) => {
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <p>
          {pokemon.id}
        </p>
          <img src={pokemon.image_url} height="20px" width="20px" />
        <p>
          {pokemon.name}
        </p> 
      </Link>
    </li>
    )
}